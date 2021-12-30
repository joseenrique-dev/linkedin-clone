import React from 'react';
const LeftSide = () => {
  return (
    // Container
    <div className='px-3'>
      {/* ArtCard */}
      <div className='text-center overflow-hidden mb-2 bg-bgLeftSide rounded-lg shadow'>
        {/* USER Info */}
        <div className='border-b border-b-gray-400 px-2.5 pt-2.5 pb-4 break-words'>
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
              className='shadow-none w-72px h-72px box-border bg-white bg-center bg-60% bg-no-repeat m-user-info-photo border-2 border-gray bg-clip-content'
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
      </div>
    </div>
  );
};

export default LeftSide;
