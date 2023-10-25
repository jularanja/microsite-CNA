import Image from 'next/image';
import React from 'react';

export default function Cronograma() {
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

                      <button className=' text-center my-2 mx-auto text-md text-slate-600 hover:opacity-80 bg-yellow-300 py-2 px-4 rounded-lg font-medium'>
                        Mais antigas
                      </button>
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
                  <div className='bg-white rounded-lg max-w-sm shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105'>
                    
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

                        <button className=' text-center my-2 mx-auto text-md text-slate-600 hover:opacity-80 bg-yellow-300 py-2 px-4 rounded-md font-medium'>
                          Mais antigas
                        </button>
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
