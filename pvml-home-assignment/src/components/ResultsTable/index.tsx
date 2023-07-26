import { ReactElement, useEffect, useState } from 'react';
import './styled.css';


import {faker} from '@faker-js/faker';
import {ConfigProvider, Table, theme} from "antd";
import { TabsContainer } from '../TabsContainer';
import { Loader } from '../Loader';


function createRandomUser() {
  return {
      id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      sex: faker.person.sexType()
  };
}

function getUsers() {
  const MAX_LENGHT = 100; // you can try to change to bigger amount to see loader
  const length = Math.floor(Math.random() * MAX_LENGHT);

  const users = Array.from({length}).map(item => createRandomUser());
  const columnNames = ['id', 'avatar', 'email', 'firstName', 'lastName', 'sex']
  return [columnNames, ...users] as any[];
}


function transformResponse(res: any[]) {
  const [columnNames, ...dataSource] = res;

  const columns = columnNames.map((column: string) => ({
      title: column,
      dataIndex: column
  }))

  return {
      columns,
      dataSource
  }
}

async function executeQuery(source: string, sql: string) {
  // this block of code is the closest to actual api request
  // const res = await fetch('/api/v1/execute', {
  //     method: 'POST',
  //     body: {
  //         source,
  //         sql
  //     }
  // })
  // const data = res.json();
  // return transformResponse(data.json());

  // this one is with mocked data
  return transformResponse(getUsers());
}

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

const tabs = ['MySQL', 'MySQL + PVML'];

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
