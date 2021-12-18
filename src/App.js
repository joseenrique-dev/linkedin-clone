import React from 'react';
import './App.css';
import { Test } from './Test.tsx';

function App() {
  return (
    <div className='App container'>
      <h1 className='text-3xl font-bold underline text-red-700'>
        Hello world!
      </h1>
      <Test name='Pipito' />
    </div>
  );
}

export default App;
