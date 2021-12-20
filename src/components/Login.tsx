import React from 'react';

type IProps = {
  props?: any;
};

export const Login = ({ props }: IProps) => {
  return (
    <>
      <div className='ml-2 py-2 flex justify-between flex-nowrap relative content-center'>
        <a href='/' className='w-40 h-5'>
          <img src='/images/login-logo.svg' alt='' />
        </a>
        <div className='flex'>
          <div className='text-xl px-2.5 py-3 font-sans text-gray-500 cursor-pointer hover:bg-zinc-200 hover:rounded-md hover:text-black'>
            Join now
          </div>
          <div className='border-rose-900 px-2.5 py-3 mr-4 text-xl text-blue-600 '>
            Sign In
          </div>
        </div>
      </div>
    </>
  );
};
