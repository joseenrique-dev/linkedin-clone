import React from 'react';

const Main = () => {
  return (
    //Container
    <div className='w-full'>
      {/* ShareBox   */}
      <div className='py-2 px-2 text-center overflow-visible mb-1 bg-white rounded-md relative border-none shadow-black flex flex-col text-mainTextColor '>
        <div className='flex'>
          <img src='/images/user.svg' alt='' className='w-50px rounded-full' />
          <button className='bg-transparent border border-gray-400 w-full rounded-full mx-3 font-medium text-left pl-4'>
            Start a post
          </button>
        </div>
        <div className='flex  justify-around'>
          <button className='outline-none text-rightSideButtonFollowText text-sm leading-6 min-h-3.25 bg-transparent flex items-center'>
            <img src='/images/photo-icon.svg' alt='' className='m-auto' />
            <span className='font-medium pl-3'>Photo</span>
          </button>
          <button className='outline-none text-rightSideButtonFollowText text-sm leading-6 min-h-3.25 bg-transparent flex items-center'>
            <img src='/images/video-icon.svg' alt='' className='m-auto' />
            <span className='font-medium pl-3'>Video</span>
          </button>
          <button className='outline-none text-rightSideButtonFollowText text-sm leading-6 min-h-3.25 bg-transparent flex items-center'>
            <img src='/images/event-icon.svg' alt='' className='m-auto' />
            <span className='font-medium pl-3'>Event</span>
          </button>
          <button className='outline-none text-rightSideButtonFollowText text-sm leading-6 min-h-3.25 bg-transparent flex items-center'>
            <img src='/images/articule-icon.svg' alt='' className='m-auto' />
            <span className='font-medium pl-3'>Write articles</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
