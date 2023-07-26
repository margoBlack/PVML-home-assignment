import { useState, useTransition } from 'react';
import './App.css';
import { InputQuery } from './components/InputQuery';
import { ResultsTable } from './components/ResultsTable';
import { ToastContainer } from 'react-toastify';

function App() {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState( `SELECT * FROM Users`);
  const [apiUrl, setApiUrl] = useState('');

  function handleRun () {
    startTransition(() => setQuery(inputValue))
  }

  return (
    <div className='main'>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <label className='tip'>Enter URL to API: https:// (if it's empty, mocked data will be provided as example)</label>
      <input onChange={(e) => {setApiUrl(e.target.value)}} placeholder='Enter URL to API' className='url-input'/>
      <InputQuery inputValue={inputValue} handleRun={handleRun} setInputValue={setInputValue} />
      <ResultsTable query={query} isPending={isPending} startTransition={startTransition} apiUrl={apiUrl}/>
    </div>
  );
}

export default App;
