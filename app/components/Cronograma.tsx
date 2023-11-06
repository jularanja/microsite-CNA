'use client';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

export default function Cronograma() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  return (
    <div id='cronograma' className='mx-auto flex justify-center '>
      <div className='grid grid-cols-1 gap-4 max-w-screen '>
        <div className='min-h-full bg-yellow-300 flex justify-center items-center rounded-2xl p-4 md:px-14'>
          <div className='container mx-auto p-3 lg:p-12 max-w-screen-lg '>
            <h1 className=' text-headingColor text-4xl md:text-5xl font-bold from-current mb-12 text-center italic'>
              Cronograma anual
            </h1>

            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0'>
              <div>
                <div className='bg-white max-w-sm rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105'>
                  <div>
                    <div className='p-5 xl:px-10 py-2 h-max flex flex-col justify-center'>
                      <h2 className='text-xl text-gray-400 font-bold text-center mb-10 mt-5'>
                        Por onde passamos
                      </h2>

                      <p className='text-xl flex gap-5 items-center'>
                        <span className='event-date text-lg tracking-wide bg-gray-400 font-medium text-white px-2 py-1 rounded-md'>
                          01/01
                        </span>{' '}
                        Japucutebipa
                      </p>
                      <br />

                      <p className='text-xl flex gap-5 items-center'>
                        <span className='event-date text-lg tracking-wide bg-gray-400 font-medium text-white px-2 py-1 rounded-md'>
                          01/01
                        </span>{' '}
                        Japucutebipa
                      </p>
                      <br />

                      <p className='text-xl flex gap-5 items-center'>
                        <span className='event-date text-lg tracking-wide bg-gray-400 font-medium text-white px-2 py-1 rounded-md'>
                          01/01
                        </span>{' '}
                        Japucutebipa
                      </p>
                      <br />

                      <p className='text-xl flex gap-5 items-center'>
                        <span className='event-date text-lg tracking-wide bg-gray-400 font-medium text-white px-2 py-1 rounded-md'>
                          01/01
                        </span>{' '}
                        Japucutebipa
                      </p>
                      <br />

                      <button onClick={openModal} className=' text-center my-2 mx-auto text-md text-slate-600 hover:opacity-80 bg-yellow-300 py-2 px-4 rounded-lg font-medium'>
                        Mais antigas
                      </button>
                    </div>
                    <div>
                      {/* Main modal */}
                      {isModalOpen && (
                        <div
                          id='default-modal'
                          className='fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'>
                          <div className='relative min-h-96  w-full max-w-2xl h-[calc(100%-10px)]'>
                            {/* Modal content */}
                            <div className='relative min-h-full mt-1  bg-white rounded-lg shadow dark:bg-gray-700'>
                              {/* Modal header */}
                              <div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
                                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                                Por onde passamos
                                </h3>
                                <button
                                  type='button'
                                  onClick={closeModal}
                                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'>
                                  <svg
                                    className='w-3 h-3'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 14 14'>
                                    <path
                                      stroke='currentColor'
                                      stroke-linecap='round'
                                      stroke-linejoin='round'
                                      stroke-width='2'
                                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                                    />
                                  </svg>
                                  <span className='sr-only'>Close modal</span>
                                </button>
                              </div>
                              {/* Modal body */}
                              <div className='p-6 space-y-1'>
                                <p className='text-lg flex gap-3 items-center'>
                                  <span className='event-date text-base tracking-wide bg-gray-400 font-medium text-white px-2 py-1 rounded-md'>
                                    01/01
                                  </span>{' '}
                                  Japucutebipa
                                </p>
                                <br />

                                <p className='text-lg flex gap-3 items-center'>
                                  <span className='event-date text-base tracking-wide bg-gray-400 font-medium text-white px-2 py-1 rounded-md'>
                                    01/01
                                  </span>{' '}
                                  Japucutebipa
                                </p>
                                <br />

                                <p className='text-lg flex gap-3 items-center'>
                                  <span className='event-date text-base tracking-wide bg-gray-400 font-medium text-white px-2 py-1 rounded-md'>
                                    01/01
                                  </span>{' '}
                                  Japucutebipa
                                </p>
                                <br />
                              </div>
                              {/* Modal footer */}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className='bg-white mb-2 max-w-sm rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 h-max'>
                  <div>
                    <div className='p-5 xl:px-10 py-2 pb-6 h-max '>
                      <h2 className='text-2xl text-primary font-bold text-center mb-5 mt-5'>
                        Próximo destino
                      </h2>
                      <Image
                        src={'/images/peixes.png'}
                        alt=''
                        width={800}
                        height={500}
                        quality={90}
                        className='rounded-md'
                        style={{
                          position: 'relative',
                          width: '100%',
                        }}
                      />
                      <span
                        className='event-date text-2xl tracking-wide bg-secondary font-medium text-white px-2 py-1'
                        style={{
                          position: 'relative',
                          top: '-20px',
                          borderRadius: '0px 5px 5px 5px',
                        }}>
                        10/01
                      </span>
                      <h3 className='text-2xl text-primary font-bold text-center mb-2 '>
                        Feira Agropecuária
                      </h3>
                      <p>
                        Support content creators and use your tokens to buy gift
                        cards, exchange for other currencies and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div className='bg-white rounded-lg max-w-sm shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 h-max'>
                    <div className='px-5 xl:px-8 py-2 h-max flex flex-col justify-center'>
                      <h1 className='text-xl text-gray-400 font-bold text-center mb-10 mt-5'>
                        Em breve
                      </h1>

                      <p className='flex items-center justify-between text-xl gap-3'>
                        <span>
                          {' '}
                          <Image
                            src={'/images/01-brasil-circle.png'}
                            alt=''
                            width={'50'}
                            height={'50'}
                            quality={90}
                            className=''
                          />
                        </span>{' '}
                        Japucutebipa{' '}
                        <span className='event-date text-lg tracking-wide font-bold text-slate-600 px-2 py-1 rounded-md'>
                          01/01
                        </span>
                      </p>
                      <br />
                      <p className='flex items-center justify-between text-xl gap-3'>
                        <span>
                          {' '}
                          <Image
                            src={'/images/01-brasil-circle.png'}
                            alt=''
                            width={'50'}
                            height={'50'}
                            quality={90}
                            className=''
                          />
                        </span>{' '}
                        Japucutebipa{' '}
                        <span className='event-date text-lg tracking-wide font-bold text-slate-600 px-2 py-1 rounded-md'>
                          01/01
                        </span>
                      </p>
                      <br />
                      <p className='flex items-center justify-between text-xl gap-3'>
                        <span>
                          {' '}
                          <Image
                            src={'/images/01-brasil-circle.png'}
                            alt=''
                            width={'50'}
                            height={'50'}
                            quality={90}
                            className=''
                          />
                        </span>{' '}
                        Japucutebipa{' '}
                        <span className='event-date text-lg tracking-wide font-bold text-slate-600 px-2 py-1 rounded-md'>
                          01/01
                        </span>
                      </p>
                      <br />
                      <p className='flex items-center justify-between text-xl gap-3'>
                        <span>
                          {' '}
                          <Image
                            src={'/images/01-brasil-circle.png'}
                            alt=''
                            width={'50'}
                            height={'50'}
                            quality={90}
                            className=''
                          />
                        </span>{' '}
                        Japucutebipa{' '}
                        <span className='event-date text-lg tracking-wide font-bold text-slate-600 px-2 py-1 rounded-md'>
                          01/01
                        </span>
                      </p>
                      <br />

                      <p className='flex items-center justify-between text-xl gap-3'>
                        <span>
                          {' '}
                          <Image
                            src={'/images/01-brasil-circle.png'}
                            alt=''
                            width={'50'}
                            height={'50'}
                            quality={90}
                            className=''
                          />
                        </span>{' '}
                        Japucutebipa{' '}
                        <span className='event-date text-lg tracking-wide font-bold text-slate-600 px-2 py-1 rounded-md'>
                          01/01
                        </span>
                      </p>
                      <br />

                       {/*  <button
                        onClick={openModal2}
                        className=' text-center my-2 mx-auto text-md text-slate-600 hover:opacity-80 bg-yellow-300 py-2 px-4 rounded-md font-medium'>
                        Mais antigas
                      </button>*/}
                    </div>

                    <div>
                      {/* Main modal */}
                      {isModalOpen2 && (
                        <div
                          id='default-modal'
                          className='fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'>
                          <div className='relative min-h-96  w-full max-w-2xl h-[calc(100%-10px)]'>
                            {/* Modal content */}
                            <div className='relative min-h-full mt-1  bg-white rounded-lg shadow dark:bg-gray-700'>
                              {/* Modal header */}
                              <div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
                                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                                  Em breve
                                </h3>
                                <button
                                  type='button'
                                  onClick={closeModal2}
                                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'>
                                  <svg
                                    className='w-3 h-3'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 14 14'>
                                    <path
                                      stroke='currentColor'
                                      stroke-linecap='round'
                                      stroke-linejoin='round'
                                      stroke-width='2'
                                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                                    />
                                  </svg>
                                  <span className='sr-only'>Close modal</span>
                                </button>
                              </div>
                              {/* Modal body */}
                              <div className='p-6 space-y-1'>
                                <p className='text-lg flex gap-3 items-center'>
                                  <span className='event-date text-base tracking-wide bg-secondary font-medium text-white px-2 py-1 rounded-md'>
                                    01/01
                                  </span>{' '}
                                  Japucutebipa
                                </p>
                                <br />

                                <p className='text-lg flex gap-3 items-center'>
                                  <span className='event-date text-base tracking-wide bg-secondary font-medium text-white px-2 py-1 rounded-md'>
                                    01/01
                                  </span>{' '}
                                  Japucutebipa
                                </p>
                                <br />

                                <p className='text-lg flex gap-3 items-center'>
                                  <span className='event-date text-base tracking-wide bg-secondary font-medium text-white px-2 py-1 rounded-md'>
                                    01/01
                                  </span>{' '}
                                  Japucutebipa
                                </p>
                                <br />
                              </div>
                              {/* Modal footer */}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
