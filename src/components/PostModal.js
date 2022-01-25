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
        <div className='fixed top-0 bottom-0 right-0 left-0 z-50 bg-modalBg animate-fade'>
          {/* Content */}
          <div className='w-full max-w-34%  bg-white relative flex flex-col top-8 mx-auto my-0 rounded-md '>
            {/* Header Modal */}
            <div className='flex justify-between px-4 py-2'>
              <h1 className='text-xl font-sans text-modalTitleColor'>
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
                    className='w-48px h-48px rounded-full'
                  />
                  <div className='flex flex-col ml-2'>
                    <span className='font-medium text-14px mb-1'>
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
                          className=' border border-gray-700 rounded-full pl-8 pr-2 py-[0.15rem] pb-[5px]  text-gray-500 text-tiny'
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
                    className='min-h-150px w-full h-16 px-3 py-2 text-tiny font-thin text-gray-500 placeholder-gray-500 border-none rounded-lg focus:outline-0 mt-2'
                    placeholder='What do you want to talk about ?'
                  ></textarea>
                  <div>
                    <div>
                      <button className='ml-3 text-blue-700 font-semibold text-tiny hover:bg-gray-200 hover:py-1 py-1 px-2 hover:px-2 hover:rounded-md mb-3'>
                        Add hashtag
                      </button>
                    </div>
                    <div className='flex justify-between'>
                      <div className='flex border-r-2 border-r-gray-300'>
                        <img
                          src='/images/modal-img.svg'
                          alt=''
                          className='p-[0.35rem] hover:bg-gray-100 hover:rounded-100% cursor-pointer'
                        />
                        <img
                          src='/images/modal-video.svg'
                          alt=''
                          className='p-[0.35rem] hover:bg-gray-100 hover:rounded-100% cursor-pointer'
                        />
                        <img
                          src='/images/modal-paper.svg'
                          alt=''
                          className='p-[0.35rem] hover:bg-gray-100 hover:rounded-100% cursor-pointer'
                        />
                        <img
                          src='/images/modal-bag.svg'
                          alt=''
                          className='p-[0.35rem] hover:bg-gray-100 hover:rounded-100% cursor-pointer'
                        />
                        <img
                          src='/images/modal-diplome.svg'
                          alt=''
                          className='p-[0.35rem] hover:bg-gray-100 hover:rounded-100% cursor-pointer'
                        />
                        <img
                          src='/images/modal-chart.svg'
                          alt=''
                          className='p-[0.35rem] hover:bg-gray-100 hover:rounded-100% cursor-pointer'
                        />
                        <img
                          src='/images/modal-dots.svg'
                          alt=''
                          className='p-[0.35rem] hover:bg-gray-100 hover:rounded-100% cursor-pointer'
                        />
                      </div>

                      <div className='flex'>
                        <button className='px-[2px] py-1 m-auto rounded-full flex items-center cursor-pointer hover:bg-gray-100 text-gray-500 text-tiny font-semibold'>
                          <img
                            src='/images/modal-msg.svg'
                            alt=''
                            className='w-[15px] h-[15px] mx-2'
                          />
                          <span className='mr-2'>Anyone</span>
                        </button>
                        <div className='min-w-[3%] pr-[44px]'></div>
                        <button
                          disabled={!editorText}
                          className={`px-5 py-1 m-auto  rounded-full  ${
                            !editorText
                              ? 'cursor-not-allowed bg-gray-200'
                              : 'bg-blue-700 text-white'
                          } text-gray-500 text-tiny font-semibold`}
                        >
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
