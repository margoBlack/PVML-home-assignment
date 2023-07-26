import { useState, useTransition } from 'react';
import './App.css';
import { InputQuery } from './components/InputQuery';
import { ResultsTable } from './components/ResultsTable';

function App() {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(
      `SELECT * FROM Users`
  );
  const [inputValue, setInputValue] = useState( `SELECT * FROM Users`);

  function handleRun (value: string) {
    startTransition(() => setQuery(inputValue))
  }

  return (
    <div className='main'>
      <InputQuery inputValue={inputValue} handleRun={handleRun} setInputValue={setInputValue} />
      <ResultsTable query={query} isPending={isPending} startTransition={startTransition}/>
    </div>
  );
}

export default App;
