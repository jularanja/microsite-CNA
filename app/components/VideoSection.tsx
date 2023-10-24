'use client';
import React from 'react';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const VideoSection = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [videoLoading, setVideoLoading] = useState<boolean>(true);

  const openModal = () => {
    setModal(!modal);
  };

  // Initialize a state variable to control visibility
  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div id='apresentacao' className='px-6 py-1 pb-10 mt-6  lg:px-8 min-h-screen	'>
        <div className='mx-auto max-w-2xl md:py-16 mt-6 '>
          <div className='text-center'>
            <h2 className='text-headingColor text-5xl font-bold from-current mb-8 text-center italic'>
              Sobre a carreta
            </h2>
            <p className='mt-6 text-gray-600'>
              Trata-se de uma carreta personalizada, com proposta multiuso, que
              apresentará o trabalho do Sistema aos participantes dos inúmeros
              eventos do agronegócio que acontecem no Brasil anualmente.
            </p>
            <div className=''>
              <div onClick={toggleVisibility}>
                <button
                  onClick={openModal}
                  className='w-full flex justify-center'>
                  {isVisible && (
                    <div
                      className='shadow-md mt-10 mb-10 min-h-[40vh] w-full max-w-2xl border rounded-3xl dark:border-gray-700 bg-center bg-no-repeat bg-[length:110%_auto]'
                      style={{
                        backgroundImage: 'url("/images/video-thumbnail.png")', minHeight:'370px'
                      }}></div>
                  )}
                  {modal ? (
                    <section className='modal__bg'>
                      <div className='modal__align'>
                        <div className='modal__content'>
                   
                          <div className='modal__video-align'>
                            <div>
                              {' '}
                              <video
                                className='w-full mt-10 h-auto max-w-full border-gray-200 border rounded-3xl dark:border-gray-700'
                                autoPlay>
                                <source
                                  src='/videos/video-agro-pelo-brasil.mp4'
                                  type='video/mp4'
                                />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  ) : null}
                </button>
              </div>
            </div>
          </div>
        </div>
   
      </div>
    </>
  );
};

export default VideoSection;
