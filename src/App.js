import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { useSelector } from 'react-redux';

function App() {
  const userState = useSelector((state) => state.userState.user);
  console.log('User data-->', userState);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={userState ? <Navigate from='/' to='/home' /> : <Login />}
        />
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
