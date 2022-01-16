import React, { useState } from 'react';

const PostModal = (props) => {
  const [editorText, setEditorText] = useState('');

  /**
   * Reset Modal action.
   * @param {*} e Event parent
   */
  const reset = (e) => {
    setEditorText('');
    props.handledClick(e);
  };

  return (
    //Container
    <div>
      {props.showModal === 'open' && (
        <div className='fixed top-0 bottom-0 right-0 left-0 z-50 bg-modalBg '>
          {/* Content */}
          <div className='w-full max-w-600px max-h-90% bg-white relative flex flex-col top-8 mx-auto my-0 rounded-md '>
            {/* Header Modal */}
            <div className='flex justify-between px-4 py-2'>
              <h1 className='text-2x.5 font-sans text-modalTitleColor'>
                Create a post
              </h1>
              <div className='hover:bg-slate-200 p-2 cursor-pointer rounded-full border-b-0'>
                <img
                  src='/images/modal-close-img.svg'
                  alt=''
                  onClick={(e) => reset(e)}
                />
              </div>
            </div>
            <hr />
            {/* Modal Content */}
            <div className='p-4 '>
              {/* Content */}
              <div className=''>
                {/* User Data and Select */}
                <div className='flex'>
                  <img
                    src='/images/user.svg'
                    alt=''
                    className='w-62px rounded-full'
                  />
                  <div className='flex flex-col ml-2'>
                    <span className='font-medium text-lg mb-1'>
                      José Enrique López Obeso
                    </span>
                    <div className='relative'>
                      <img
                        src='/images/world-small-modal-select.svg'
                        alt=''
                        className='absolute top-2 left-2'
                      />
                      <div>
                        <select
                          name=''
                          id=''
                          className=' border border-gray-700 rounded-full pl-8 pr-2 py-1  text-gray-500 text-base-midle'
                        >
                          <option value=''> Anyone</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <textarea
                    value={editorText}
                    onChange={(e) => setEditorText(e.target.value)}
                    class='min-h-200px w-full h-16 px-3 py-2 text-lg font-thin text-gray-500 placeholder-gray-500 border-none rounded-lg focus:outline-0 mt-2'
                    placeholder='What do you want to talk about ?'
                  ></textarea>
                  <div>
                    <div>
                      <button className='ml-3 text-blue-600 font-semibold text-base-midle hover:bg-gray-200 hover:py-1 py-1 px-2 hover:px-2 hover:rounded-md mb-3'>
                        Add hashtag
                      </button>
                    </div>
                    <div className='flex justify-between flex-wrap'>
                      <div className='flex border-r-2 border-r-gray-300'>
                        <img
                          src='/images/modal-img.svg'
                          alt=''
                          className='p-2 hover:bg-gray-300 hover:rounded-full cursor-pointer mr-3'
                        />
                        <img
                          src='/images/modal-video.svg'
                          alt=''
                          className='p-2 hover:bg-gray-300 hover:rounded-full cursor-pointer mr-3'
                        />
                        <img
                          src='/images/modal-paper.svg'
                          alt=''
                          className='p-2 hover:bg-gray-300 hover:rounded-full cursor-pointer mr-3'
                        />
                        <img
                          src='/images/modal-bag.svg'
                          alt=''
                          className='p-2 hover:bg-gray-300 hover:rounded-full cursor-pointer mr-3'
                        />
                        <img
                          src='/images/modal-diplome.svg'
                          alt=''
                          className='p-2 hover:bg-gray-300 hover:rounded-full cursor-pointer mr-3'
                        />
                        <img
                          src='/images/modal-chart.svg'
                          alt=''
                          className='p-2 hover:bg-gray-300 hover:rounded-full cursor-pointer mr-3'
                        />
                        <img
                          src='/images/modal-dots.svg'
                          alt=''
                          className='p-2 hover:bg-gray-300 hover:rounded-full cursor-pointer mr-3'
                        />
                      </div>
                      <div className='flex justify-between w-35%'>
                        <button className='flex items-center ml-3 text-blue-600 font-semibold text-base-midle hover:bg-gray-200 px-2 py-1 hover:py-1 hover:px-2 hover:rounded-full '>
                          <img
                            src='/images/modal-msg.svg'
                            alt=''
                            className='w-18px h-18px'
                          />
                          <span className='text-gray-500 text-base ml-2 font-semibold '>
                            Anyone
                          </span>
                        </button>
                        {/* <button className='flex items-center  hover:bg-gray-200 hover:rounded-full'>
                      <img
                        src='/images/modal-msg.svg'
                        alt=''
                        className='w-18px h-18px'
                      />
                      <span className='text-gray-500 text-base ml-2 font-semibold '>
                        Anyone
                      </span>
                    </button> */}
                        <button className='px-5 py-1 rounded-full bg-gray-200 cursor-not-allowed text-gray-500 text-base font-semibold'>
                          <span>Post</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostModal;
