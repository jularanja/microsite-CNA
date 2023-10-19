import Image from 'next/image';
import React from 'react';

export default function Cronograma() {
  return (
    <div
      id='cronograma'
      className='mx-auto rounded-xl'
      style={{ background: '#efc630', maxWidth: '90%', borderRadius: '40px' }}>
      <div className='grid grid-cols-1 gap-4 '>
        <div className='min-h-screen  bg-yellow-300 flex justify-center items-center rounded-2xl'>
          <div className='container mx-auto p-12 '>
            <h1 className=' text-headingColor text-5xl font-bold from-current mb-8 text-center italic'>
              Cronograma anual
            </h1>

            <div
              className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0'
              style={{ padding: '10px 100px 10px 100px' }}>
              <div>
                <div>
                  <div
                    className='bg-white shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105'
                    style={{ borderRadius: '15px' }}>
                    <div>
                      <div className='px-10 py-2 h-max'>
                        <h1 className='text-xl font-gray-700 font-bold text-center mb-10 mt-5'>
                          Por onde passamos
                        </h1>

                        <p>
                          <span
                            className='event-date'
                            style={{ backgroundColor: '#a8a8a8' }}>
                            01/01
                          </span>{' '}
                          Japucutebipa
                        </p>
                        <br />
                        <p>
                          <span
                            className='event-date'
                            style={{ backgroundColor: '#a8a8a8' }}>
                            01/01
                          </span>{' '}
                          Japucutebipa
                        </p>
                        <br />
                        <p>
                          <span
                            className='event-date'
                            style={{ backgroundColor: '#a8a8a8' }}>
                            01/01
                          </span>{' '}
                          Japucutebipa
                        </p>
                        <br />
                        <p>
                          <span
                            className='event-date'
                            style={{ backgroundColor: '#a8a8a8' }}>
                            01/01
                          </span>{' '}
                          Japucutebipa
                        </p>
                        <br />
                        <p>
                          <span
                            className='event-date'
                            style={{ backgroundColor: '#a8a8a8' }}>
                            01/01
                          </span>{' '}
                          Japucutebipa
                        </p>
                        <br />
                        <p>
                          <span
                            className='event-date'
                            style={{ backgroundColor: '#a8a8a8' }}>
                            01/01
                          </span>{' '}
                          Japucutebipa
                        </p>
                        <br />
                        <p>
                          <span
                            className='event-date'
                            style={{ backgroundColor: '#a8a8a8' }}>
                            01/01
                          </span>{' '}
                          Japucutebipa
                        </p>
                        <br />
                        <button
                          className='mt-12 text-center bg-yellow-300 py-2 rounded-lg'
                          style={{
                            display: 'block',
                            margin: '0 auto',
                            width: '150px',
                          }}>
                          Mais antigas
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div
                    className='bg-white shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 h-max'
                    style={{ borderRadius: '15px' }}>
                    <div>
                      <div className='px-10 py-2 h-max'>
                        <h1 className='text-xl font-primary font-bold text-center mb-10 mt-5'>
                          Próximo destino
                        </h1>
                        <Image
                          src={'/images/placeholder.jpg'}
                          alt=''
                          width={'100'}
                          height={'100'}
                          style={{
                            position: 'relative',
                            width: '100%',
                          }}
                        />
                        <span className='pic-date'>10/11</span>
                        <h3 className='text-center'>Feira Agropecuária</h3>
                        <p>
                          Support content creators and use your tokens to buy
                          gift cards, exchange for other currencies and more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div
                    className='bg-white shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105'
                    style={{ borderRadius: '15px' }}>
                    <div>
                      <div className='px-10 py-2 h-max'>
                        <h1 className='text-xl font-gray-700 font-bold text-center mb-10 mt-5'>
                          Em breve
                        </h1>

                        <p className='flex items-center justify-between'>
                          <span>
                            {' '}
                            <Image
                              src={'/images/01-brasil-circle.png'}
                              alt=''
                              width={'40'}
                              height={'40'}
                              style={{
                               
                                
                              }}
                            />
                          </span>{' '}
                          Japucutebipa{' '}
                          <span
                            className='event-date'
                            style={{ backgroundColor: '#a8a8a8' }}>
                            01/01
                          </span>
                        </p>
                        <br />
                        <p className='flex items-center justify-between'>
                          <span>
                            {' '}
                            <Image
                              src={'/images/01-brasil-circle.png'}
                              alt=''
                              width={'40'}
                              height={'40'}
                              style={{
                               
                                
                              }}
                            />
                          </span>{' '}
                          Japucutebipa{' '}
                          <span
                            className='event-date'
                            style={{ backgroundColor: '#a8a8a8' }}>
                            01/01
                          </span>
                        </p>
                        <br />
                        <p className='flex items-center justify-between'>
                          <span>
                            {' '}
                            <Image
                              src={'/images/01-brasil-circle.png'}
                              alt=''
                              width={'40'}
                              height={'40'}
                              style={{
                               
                                
                              }}
                            />
                          </span>{' '}
                          Japucutebipa{' '}
                          <span
                            className='event-date'
                            style={{ backgroundColor: '#a8a8a8' }}>
                            01/01
                          </span>
                        </p>
                        <br />
                        <p className='flex items-center justify-between'>
                          <span>
                            {' '}
                            <Image
                              src={'/images/01-brasil-circle.png'}
                              alt=''
                              width={'40'}
                              height={'40'}
                              style={{
                               
                                
                              }}
                            />
                          </span>{' '}
                          Japucutebipa{' '}
                          <span
                            className='event-date'
                            style={{ backgroundColor: '#a8a8a8' }}>
                            01/01
                          </span>
                        </p>
                        <br />
                        <p className='flex items-center justify-between'>
                          <span>
                            {' '}
                            <Image
                              src={'/images/01-brasil-circle.png'}
                              alt=''
                              width={'40'}
                              height={'40'}
                              style={{
                               
                                
                              }}
                            />
                          </span>{' '}
                          Japucutebipa{' '}
                          <span
                            className='event-date'
                            style={{ backgroundColor: '#a8a8a8' }}>
                            01/01
                          </span>
                        </p>
                        <br />
                       
                        <br />
                    
                        <br />
                        <button
                          className='mt-8 text-center bg-yellow-300 py-2 rounded-lg'
                          style={{
                            display: 'block',
                            margin: '0 auto',
                            width: '150px',
                          }}>
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
    </div>
  );
}
