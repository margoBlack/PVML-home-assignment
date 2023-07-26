import { ReactElement } from 'react';
import './styled.css';

import { SqlCodeBlock } from '../SqlCodeBlock';

export function InputQuery({inputValue, setInputValue, handleRun}: any): ReactElement {
  return (
    <div className='input'>
        <SqlCodeBlock inputValue={inputValue} setInputValue={setInputValue} />
        <button className='run-button' onClick={() => handleRun()}>Run</button>
    </div>
  );
}
