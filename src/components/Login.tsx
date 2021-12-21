import React from 'react';

type IProps = {
  props?: any;
};

export const Login = ({ props }: IProps) => {
  return (
    <>
      <div className='ml-2 py-7 flex justify-around flex-nowrap relative content-center'>
        <a href='/' className='w-24 sm:w-40 h-5'>
          <img src='/images/login-logo.svg' alt='' />
        </a>
        <div className='flex'>
          <div className='pt-3 invisible  lg:visible sm:text-xl text-sm px-2 font-sans text-gray-500 cursor-pointer hover:bg-zinc-200 hover:rounded-md hover:text-black mr-5'>
            Join now
          </div>
          <div className='border rounded-full sm:leading-20 lg:py-2 lg:px-6 py-1 px-3 sm:pt-1  border-blue-600  mr-4 sm:text-xl text-sm text-blue-600 font-semibold hover:border-2 hover:bg-blue-50 cursor-pointer'>
            Sign In
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-2'>
        <p className='w-full  leading-snug lg:ml-16 px-5  text-gray-500 font-light text-3xl lg:text-6xl'>
          Welcome to your professional community
        </p>
        <div className='w-5/12 py-10 mx-auto'>
          <img src='/images/login-hero.svg' alt='' />
        </div>
      </div>
      <div className='m-auto'>
        <div className='w-10/12 bg-gray-100 border border-slate-500 font-medium text-slate-700 border-b-gray-600 rounded-full flex justify-center flex-nowrap mx-3.5 py-2 px-10'>
          <img src='/images/google.svg' alt='' className='mr-1' />
          Sign in with Google
        </div>
      </div>
    </>
  );
};
