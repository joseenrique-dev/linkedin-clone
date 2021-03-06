import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LeftSide from './LeftSide';
import Main from './Main';
import Rightside from './RightSide';

const Home = () => {
  const userState = useSelector((state) => state.userState.user); //TODO:Search the firebase model instead of any
  return (
    <div>
      {
        !userState && <Navigate to={'/'} />
      }
      <div className=' flex flex-col md:flex-row  justify-center py-4 font-bold underline text-center'>
        <h5>
          <a className='text-blue-700'>Hiring in a hurry? - </a>
        </h5>
        <span>
          Find talent pros in record time with Upwork and keep business
        </span>
      </div>
      {/* Page Structure */}
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6'>
          <LeftSide />
          <Main />
          <Rightside />
        </div>
      </div>
    </div>
  );
};

export default Home;
