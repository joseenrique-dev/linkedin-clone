import React from 'react';

const PostModal = () => {
  return (
    //Container
    <div className='fixed top-0 bottom-0 right-0 left-0 z-50 bg-modalBg '>
      {/* Content */}
      <div className='w-full max-w-552px max-h-90% bg-white relative flex flex-col top-8 mx-auto my-0 rounded-md '>
        {/* Header Modal */}
        <div className='flex justify-between px-4 py-2'>
          <h1 className='text-xl font-sans'>Create a post</h1>
          <div className='hover:bg-slate-200 p-2 cursor-pointer rounded-full border-b-0'>
            <img src='/images/modal-close-img.svg' alt='' />
          </div>
        </div>
        <hr />
        {/* Modal Content */}
        <div className='p-4 '>
          {/* User Data and Select */}
          <div className=''>
            <div className='flex'>
              <img
                src='/images/user.svg'
                alt=''
                className='w-50px rounded-full'
              />
              <div className='flex flex-col ml-2'>
                <span className='font-medium'>José Enrique López Obeso</span>
                <div className='relative'>
                  <img
                    src='/images/world-small-modal-select.svg'
                    alt=''
                    className='absolute top-2 left-1.5'
                  />
                  <div>
                    <select
                      name=''
                      id=''
                      className=' border border-gray-400 rounded-full pl-8 pr-2 py-1'
                    >
                      <option value=''> Anyone</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
