import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/home'
          element={
            <>
              <Header />
              <Home />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
