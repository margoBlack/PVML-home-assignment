import { ReactElement, useEffect, useState } from 'react';
import './styled.css';
import {ConfigProvider, Table, theme} from "antd";
import { TabsContainer } from '../TabsContainer';
import { Loader } from '../Loader';
import { tabs } from '../../tabs';
import { executeQuery } from './api';

const TableBlock = ({queryResult, isPending}: {queryResult: {columns: any[], dataSource: any[]}, isPending: boolean} ) => {
    const { darkAlgorithm } = theme;
    const {columns, dataSource} = queryResult;

    return (
        <ConfigProvider theme={{
            algorithm: darkAlgorithm,
        }}>
        <div className={['table-container', isPending && 'centered-element'].join(' ')  }>
          {isPending ? <Loader /> :
            <Table dataSource={dataSource} columns={columns} pagination={false}/>
          }
        </div>
        </ConfigProvider>
    );
};

export function ResultsTable({query, isPending, startTransition}: any): ReactElement {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [queryResult, setQueryResult] = useState({columns: [], dataSource: []});

  useEffect(() => {
    (async () => {
      setQueryResult(await executeQuery(activeTab, query) as any);
  })()
  }, [activeTab, query]);

  function handleChangeActiveTab(tab: string) {
    startTransition(() => setActiveTab(tab))
}

  return (
    <>
      <TabsContainer activeTab={activeTab} onTabChange={handleChangeActiveTab} />
      <TableBlock queryResult={queryResult} isPending={isPending} /> 
    </>
  );
}
