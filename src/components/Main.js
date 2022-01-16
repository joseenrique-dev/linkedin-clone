import React, { useState } from 'react';
import PostModel from './PostModal';

const Main = () => {
  const [showModal, setShowModal] = useState('close');

  const handledClick = (e) => {
    debugger;
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case 'open':
        setShowModal('close');
        break;
      case 'close':
        setShowModal('open');
        break;

      default:
        setShowModal('close');
        break;
    }
  };
  return (
    //Container
    <div className='w-full'>
      {/* ShareBox   */}
      <div className='pt-3 px-2 text-center overflow-visible mb-1 bg-white rounded-md relative border-none shadow-black flex flex-col text-mainTextColor '>
        <div className='flex'>
          <img src='/images/user.svg' alt='' className='w-50px rounded-full' />
          <button
            onClick={handledClick}
            className='bg-transparent border border-gray-400 w-full rounded-full mx-3 font-medium text-left pl-4'
          >
            Start a post
          </button>
        </div>
        <div className='flex  justify-around'>
          <button className='outline-none text-rightSideButtonFollowText text-sm leading-6 min-h-3.25 bg-transparent flex items-center'>
            <img src='/images/photo-icon.svg' alt='' className='m-auto' />
            <span className='font-medium pl-1'>Photo</span>
          </button>
          <button className='outline-none text-rightSideButtonFollowText text-sm leading-6 min-h-3.25 bg-transparent flex items-center'>
            <img src='/images/video-icon.svg' alt='' className='m-auto' />
            <span className='font-medium pl-1'>Video</span>
          </button>
          <button className='outline-none text-rightSideButtonFollowText text-sm leading-6 min-h-3.25 bg-transparent flex items-center'>
            <img src='/images/event-icon.svg' alt='' className='m-auto' />
            <span className='font-medium pl-1'>Event</span>
          </button>
          <button className='outline-none text-rightSideButtonFollowText text-sm leading-6 min-h-3.25 bg-transparent flex items-center'>
            <img src='/images/articule-icon.svg' alt='' className='m-auto' />
            <span className='font-medium pl-1'>Write articles</span>
          </button>
        </div>
      </div>

      {/* Article */}
      <div className=' text-center overflow-visible mb-1 bg-white rounded-md relative border-none shadow-black flex flex-col text-mainTextColor '>
        {/* SharedActor */}
        <div className='px-3 pr-10'>
          <a className='flex flex-nowrap items-center no-underline mr-3 grow overflow-hidden'>
            <img src='/images/user.svg' alt='' className='w-12 h-12' />
            <div className='flex flex-col grow basis-0 ml-2 overflow-hidden text-left'>
              <span className='text-sm font-bold text-textSharedActor'>
                Title
              </span>
              <span className='text-xs font-bold text-normalTextHeader'>
                Info
              </span>
              <span className='text-xs font-bold text-normalTextHeader'>
                Date
              </span>
            </div>
          </a>
          <button className='absolute right-3 top-0 bg-transparent overflow-hidden'>
            <img src='/images/ellipsis.svg' alt='' />
          </button>
        </div>
        {/* Description */}
        <div className='px-4 overflow-hidden text-rgbPNight text-base text-left'>
          Description
        </div>
        {/* SharedImage */}
        <a className='mt-2 w-full block relative bg-sharedBack'>
          <img
            src='/images/shared-image.jpg'
            alt=''
            className='object-contain w-full h-full'
          />
        </a>
        {/* SocialSection */}
        <div className='mx-4'>
          <div className='flex justify-between py-1 border-b '>
            <div className='flex cursor-pointer'>
              <img src='/images/like.svg' alt='' />
              <img src='/images/applause.svg' alt='' />
              <img src='/images/heart.svg' alt='' />
              <span className='text-rightSideButtonFollowText text-xs m-auto hover:text-blue-700 hover:underline  hover:decoration-blue-700'>
                17
              </span>
            </div>
            <div className='cursor-pointer'>
              <span className='text-rightSideButtonFollowText text-xs m-auto hover:text-blue-700 hover:underline  hover:decoration-blue-700'>
                2 comments
              </span>
            </div>
          </div>
        </div>
        {/* Panel Btns Shared */}
        <div>
          <div className='flex justify-between px-4 sm:px-1 lg:px-4  py-2 flex-wrap'>
            <button className='flex justify-center items-center hover:bg-gray-200 p-2 rounded cursor-pointer'>
              <img src='/images/big-like.svg' alt='' />
              <span className='text-sm font-semibold pl-2'>Like</span>
            </button>
            <button className='flex justify-center items-center hover:bg-gray-200 p-2 rounded cursor-pointer'>
              <img src='/images/big-comment.svg' alt='' />
              <span className='text-sm font-semibold pl-2'>Comment</span>
            </button>
            <button className='flex justify-center items-center hover:bg-gray-200 p-2 rounded cursor-pointer'>
              <img src='/images/big-share.svg' alt='' />
              <span className='text-sm font-semibold pl-2'>Share</span>
            </button>
            <button className='flex justify-center items-center hover:bg-gray-200 p-2 rounded cursor-pointer'>
              <img src='/images/big-send.svg' alt='' />
              <span className='text-sm font-semibold pl-2'>Send</span>
            </button>
          </div>
        </div>
      </div>

      <PostModel showModal={showModal} handledClick={handledClick} />
    </div>
  );
};

export default Main;
