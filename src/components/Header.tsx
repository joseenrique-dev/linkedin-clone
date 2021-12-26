import React from 'react';

const Header = () => {
  return (
    <div className='w-full bg-white z-50'>
      <div className='border border-b-gray-300 flex'>
        <div className='pl-5'>
          <a href='/home'>
            <img src='/images/home-logo.svg' alt='' />
          </a>
        </div>
        <div className='relative'>
          <label className='relative block pl-2'>
            <span className='sr-only'>Search</span>
            <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
              <svg className='h-5 w-5 fill-gray-300' viewBox='0 0 20 20'></svg>
            </span>
            <input
              className='placeholder:text-gray-400 block bg-gray-200 w-full border rounded-sd py-1.5 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-300 focus:ring-gray-300 focus:border focus:w-96 focus:ring-1 sm:text-sm'
              placeholder='Search'
              type='text'
              name='search'
            />
          </label>
          <div className='absolute top-2.5 left-5'>
            <img src='/images/search-icon.svg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
