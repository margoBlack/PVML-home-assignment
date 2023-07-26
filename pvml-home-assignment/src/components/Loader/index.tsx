import { ReactElement } from 'react';
import './styled.css';

export function Loader(): ReactElement {
    return (
        <div className='lds-ripple'><div></div><div></div></div>
    );
};

