import React from 'react';

const Header = () => {
  return (
    // CONTAINER
    <div className='w-full bg-white z-50 fixed left-0 px-5 border border-b-gray-300'>
      {/* CONTENT */}
      <div className='flex grow'>
        {/* LOGO */}
        <div className='mr-0'>
          <a href='/home'>
            <img src='/images/home-logo.svg' alt='' className='max-w-none' />
          </a>
        </div>
        {/* SEARCH */}
        <div className='relative'>
          <label className='relative block pl-2'>
            <span className='sr-only'>Search</span>
            <span className='absolute inset-y-0 left-0 flex items-center pl-2 py-1.5'>
              <svg className='h-5 w-5 fill-gray-300' viewBox='0 0 20 20'></svg>
            </span>
            <input
              className='placeholder:text-placeholderSearchColor w-56  pr-4 pl-10 h-9    leading-7 block bg-inputSearchBackground border rounded-sd   shadow-sm focus:outline-none focus:border-gray-300 focus:ring-gray-300 focus:border focus:w-80 focus:ring-1 sm:text-sm'
              placeholder='Search'
              type='text'
              name='search'
            />
          </label>
          <div className='absolute top-2.5 left-5'>
            <img src='/images/search-icon.svg' alt='' />
          </div>
        </div>
        {/* NAV */}
        <div className='flex bottom-0 fixed lg:static w-full justify-around left-0'>
          {/* NAVLISTWRAP */}
          <div className='px-2.5 flex justify-center'>
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
          <div className='px-2.5 '>
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
          <div className='px-2.5'>
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
          <div className='px-2.5'>
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
          <div className='px-2.5'>
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
        </div>
      </div>
    </div>
  );
};

export default Header;
