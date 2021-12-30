import React from 'react';
const LeftSide = () => {
  return (
    // Container
    <div className='px-3'>
      {/* ArtCard */}
      <div className='text-center overflow-hidden mb-2 bg-bgLeftSide rounded-lg shadow'>
        {/* USER Info */}
        <div className='border-b border-b-gray-200 px-2.5 pt-2.5 pb-4 break-words'>
          {/* Card Background */}
          <div
            style={{
              backgroundImage: `url("/images/card-bg.svg")`,
            }}
            className='bg-center bg-cover h-14 m-user-info'
          ></div>
          <a href=''>
            {/* Photo */}
            <div
              style={{
                backgroundImage: `url("/images/photo.svg")`,
              }}
              className='shadow-none w-72px h-72px box-border bg-white bg-center bg-60% bg-no-repeat m-user-info-photo border-gray bg-clip-content rounded-full'
            >
              {' '}
            </div>
            {/* Link */}
            <div className='text-base leading-6 text-neutral-900 font-bold'>
              Welcome there
            </div>
          </a>
          <a>
            <span className='text-photoUserImageLink mt-1 text-12px leading-6 font-medium'>
              Add a photo
            </span>
          </a>
        </div>
        {/* Widget */}
        <div className='border-b pt-3 pb-3 '>
          <a className='hover:bg-gray-300 no-underline flex content-center justify-between px-2.5 py-1'>
            <div className='flex flex-col text-left'>
              <span className='text-12px font-semibold leading-6 text-gray-500'>
                Connections
              </span>
              <span className='text-12px font-semibold leading-6 text-black'>
                Grow your Network
              </span>
            </div>
            <img src='/images/widget-icon.svg' alt='' />
          </a>
        </div>
        {/* Item */}
        <div className='px-2 py-5 hover:bg-gray-300'>
          <span className='flex text-12px font-semibold'>
            <img src='/images/item-icon.svg' alt='' />
            My Items
          </span>
        </div>
      </div>
      {/* CommunityCard */}
      <div className=' flex flex-col text-center overflow-hidden mb-2 bg-bgLeftSide rounded-lg shadow'>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src='/images/plus-icon.svg' alt='' />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </div>
    </div>
  );
};

export default LeftSide;
