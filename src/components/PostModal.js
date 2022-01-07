import React from 'react';

const PostModal = () => {
  return (
    //Container
    <div className='fixed top-0 bottom-0 right-0 left-0 z-50 bg-modalBg'>
      {/* Content */}
      <div className='w-full max-w-552px max-h-90% bg-white border-2 relative flex flex-col top-8 mx-auto my-0'>
        Modal
      </div>
    </div>
  );
};

export default PostModal;
