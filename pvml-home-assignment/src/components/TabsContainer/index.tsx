import { ReactElement } from 'react';
import './styled.css';
import { tabs } from '../../tabs';

export function TabsContainer({activeTab, onTabChange}: any): ReactElement {
    return (
        <div className='tabs-container'>
            {
                tabs.map(tab => (
                    <button key={tab} className={tab === activeTab ? 'tab-button-active' : 'tab-button-not-active'} onClick={() => onTabChange(tab)}>{tab}</button>
                ))
            }
        </div>
    );
};

