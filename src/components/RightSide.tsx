import React from 'react';

const Rightside = () => {
  return (
    //Container
    <div>
      {/* FollowCard */}
      <div className='text-center overflow-hidden mb-2 bg-bgLeftSide rounded relative border-none p-3 shadow-black'>
        {/* Title */}
        <div className='flex justify-between w-full font-bold text-gray-500 text-14px'>
          <h2>Add to your feed</h2>
          <img src='/images/feed-icon.svg' alt='' />
        </div>
        {/* FeedList */}
        <ul className='mt-4'>
          <li className='relative flex items-center p-2'>
            <a>
              {/* Avatar */}
              <div
                className='bg-contain bg-center w-12 h-12 mr-2'
                style={{
                  backgroundImage: `url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs")`,
                }}
              ></div>
            </a>
            <div className='flex flex-col items-center'>
              <span className='text-base leading-6 font-semibold'>
                #Linkedin
              </span>
              <button className='bg-transparent box-border py-1 px-4  max-w-md max-h-md border-4 font-semibold border-gray-500 rounded-full text-rightSideButtonFollowText'>
                Follow
              </button>
            </div>
          </li>
          <li className='relative flex items-center p-2'>
            <a>
              {/* Avatar */}
              <div
                className='bg-contain bg-center w-12 h-12 mr-2'
                style={{
                  backgroundImage: `url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs")`,
                }}
              ></div>
            </a>
            <div className='flex flex-col items-center'>
              <span className='text-14px leading-6 font-semibold'>#Video</span>
              <button className='bg-transparent box-border py-1 px-4 shadow-slate-500 max-w-md max-h-md border-4 font-semibold text-rightSideButtonFollowText border-gray-500 rounded-full'>
                Follow
              </button>
            </div>
          </li>
        </ul>
        {/* Recommendation */}
        <div className='flex items-center text-blue-700 text-sm cursor-pointer font-medium'>
          View all recommendations
          <img src='/images/right-icon.svg' alt='' />
        </div>
      </div>
      {/* BannerCard */}
      <div>
        <img
          src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Rightside;
