import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const userState = useSelector((state: any) => state.userState.user); //TODO:Search the firebase model instead of any
  
  return (
    // CONTAINER
    <div className='w-screen bg-white z-50 left-0 lg:px-56 px-2 border border-b-gray-300 '>
      {/* CONTENT */}
      <div className='flex grow'>
        {/* LOGO */}
        <div className='mr-0.5 flex flex-col justify-center'>
          <a href='/home'>
            <img src='/images/home-logo.svg' alt='' className='max-w-none' />
          </a>
        </div>
        {/* SEARCH */}
        <div className='relative flex flex-col justify-center min-w-1/2'>
          <label className='relative block pl-2'>
            <span className='sr-only'>Search</span>
            <span className='absolute inset-y-0 left-0 flex items-center pl-2 py-1.5'>
              <svg className='h-5 w-5 fill-gray-300' viewBox='0 0 20 20'></svg>
            </span>
            <input
              className='placeholder:text-placeholderSearchColor w-56 h-9  pr-2 pl-10 leading-7 block bg-inputSearchBackground border rounded-sd   shadow-sm focus:outline-none focus:border-gray-300 focus:ring-gray-300 focus:border lg:focus:w-80 focus:ring-1 sm:text-sm'
              placeholder='Search'
              type='text'
              name='search'
            />
          </label>
          <div className='absolute lg:top-4 left-5 sm:top-1 md:top-3'>
            <img src='/images/search-icon.svg' alt='' />
          </div>
        </div>
        {/* NAV */}
        <div className='flex bottom-0 fixed lg:static w-full justify-around left-0 border border-b-gray-300 bg-white lg:border-none lg:bg-transparent'>
          {/* NAVLISTWRAP */}
          <div className='px-2.5 flex py-1'>
            <a
              className='no-underline items-center leading-normal bg-transparent justify-center font-normal text-xs min-w-min min-h-min'
              href='/'
            >
              <img src='/images/nav-home.svg' alt='' className='m-auto' />
              <span className='text-normalTextHeader hover:text-focusTextHeader active:text-focusTextHeader'>
                Home
              </span>
            </a>
          </div>
          <div className='px-2.5 flex py-1'>
            <a
              className='no-underline leading-normal bg-transparent justify-center font-normal text-xs min-w-min min-h-min'
              href='/'
            >
              <img src='/images/nav-network.svg' alt='' className='m-auto' />
              <span className='text-normalTextHeader hover:text-focusTextHeader active:text-focusTextHeader'>
                My Network
              </span>
            </a>
          </div>
          <div className='px-2.5 flex py-1'>
            <a
              className='no-underline items-center leading-normal bg-transparent justify-center font-normal text-xs min-w-min min-h-min'
              href='/'
            >
              <img src='/images/nav-jobs.svg' alt='' className='m-auto' />
              <span className='text-normalTextHeader hover:text-focusTextHeader active:text-focusTextHeader'>
                Jobs
              </span>
            </a>
          </div>
          <div className='px-2.5 flex py-1'>
            <a
              className='no-underline items-center leading-normal bg-transparent justify-center font-normal text-xs min-w-min min-h-min'
              href='/'
            >
              <img src='/images/nav-messaging.svg' alt='' className='m-auto' />
              <span className='text-normalTextHeader hover:text-focusTextHeader active:text-focusTextHeader'>
                Messaging
              </span>
            </a>
          </div>
          <div className='px-2.5 flex py-1'>
            <a
              className='no-underline items-center leading-normal bg-transparent justify-center font-normal text-xs min-w-min min-h-min'
              href='/'
            >
              <img
                src='/images/nav-notifications.svg'
                alt=''
                className='m-auto'
              />
              <span className='text-normalTextHeader hover:text-focusTextHeader active:text-focusTextHeader'>
                Notifications
              </span>
            </a>
          </div>
          <div className='px-2.5 py-1 hidden lg:flex'>
            <a>
              {
                userState ? 
                <img src={userState.photoURL} alt='' className='rounded-full w-6' /> :
                <img src='/images/user.svg' alt='' className='rounded-full w-6' />
              }
              <div className='flex cursor-pointer'>
                <span className='text-normalTextHeader hover:text-focusTextHeader active:text-focusTextHeader text-xs'>
                  Me
                </span>
                <img src='/images/down-icon.svg' alt='' />
              </div>
            </a>
            {/* <div>
              <a>Sign Out</a>
            </div> */}
          </div>
          <div className='px-2.5 py-1 border-l-zinc-400 border-l hidden lg:flex'>
            <a>
              <img src='/images/nav-work.svg' alt='' />
              <span className='text-normalTextHeader hover:text-focusTextHeader active:text-focusTextHeader text-xs flex'>
                Work
                <img src='/images/down-icon.svg' alt='' />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
