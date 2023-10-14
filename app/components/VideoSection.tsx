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
      <div
        id='apresentacao'
        className='px-6 py-1 mt-6  lg:px-8'>
        <div className='mx-auto max-w-2xl md:py-16 mt-6 '>
          <div className='text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-headingColor sm:text-6xl'>
              Sobre o Projeto
            </h2>
            <p className='mt-6 text-gray-600'>
              Trata-se de uma carreta personalizada, com proposta multiuso, que
              apresentará o trabalho do Sistema aos participantes dos inúmeros
              eventos do agronegócio que acontecem no Brasil anualmente.
            </p>
            <div className='w-full max-w-screen-md mx-auto px-4 lg:px-1 pt-4'>
              <div onClick={toggleVisibility}>
                <button
                  onClick={openModal}
                  className='h-48 w-full flex justify-center'>
                 { isVisible &&  <div className='absolute h-[60%] w-[50%] max-w-full border rounded-xl dark:border-gray-700 bg-top bg-no-repeat bg-cover' style={{ backgroundImage: 'url("/images/video-thumbnail.png")' }}>

                  </div>}
                  {modal ? (
                    <section className='modal__bg'>
                      <div className='modal__align'>
                        <div className='modal__content'>
                          <IoCloseOutline
                            className='modal__close'
                            arial-label='Close modal'
                            onClick={setModal}
                          />
                          <div className='modal__video-align'>
                    

                            <div>
                              {' '}
                              <video
                                className='w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700'
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
