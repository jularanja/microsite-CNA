'use client';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import ImageGallery from './ImageGallery';

type Event = {
  id: number;
  date: string;
  title: string;
  href: string;
  url: string;
  flag: string;
};

//Info Eventos
const events = [
  {
    id: 1,
    date: '12/23',
    title: 'Inauguração',
    href: '#',
    url: '/images/peixes.png',
    flag: '/images/01-brasil-circle.png',
    summary: 'Evento de apresentação da Carreta Agro Pelo Brasil',
  },

  {
    id: 2,
    date: '01/24',
    title: 'Sealba Show - SE',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 3,
    date: '02/24',
    title: 'Evento c/ a Federação - CE',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 4,
    date: '03/24',
    title: 'Evento c/ a Federação - GO',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 5,
    date: '04/24',
    title: 'Tecnoshow - GO',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 6,
    date: '04/24',
    title: 'Evento c/ a Federação - MS',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 7,
    date: '05/24',
    title: 'Expozebu - MS',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 8,
    date: '05/24',
    title: 'AgroBrasília - DF',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 9,
    date: '05/24',
    title: 'Rondônia Rural Show - RO',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 10,
    date: '06/24',
    title: 'PECNORDETE - CE',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 11,
    date: '06/24',
    title: 'Bahia Farm Show - BA',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 12,
    date: '07/24',
    title: 'EXPOIMP - MA',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 13,
    date: '07/24',
    title: 'Evento c/ a Federação - TO',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 14,
    date: '08/24',
    title: 'Manutenção (Truckvan) - SP',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 15,
    date: '08/24',
    title: 'EXPOINTER - RS',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 16,
    date: '09/24',
    title: 'EXPOFLORA - SP',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 17,
    date: '09/24',
    title: 'EXPOFEIRA PB AGRO - PB',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 18,
    date: '10/24',
    title: 'Evento c/ a Federação - RN',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 19,
    date: '11/24',
    title: 'e-Agro - BA',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 20,
    date: '11/24',
    title: 'AGRINORDESTE - PE',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },

  {
    id: 21,
    date: '11/24',
    title: 'Evento CNA - BR',
    href: '#',
    url: '/images/carreta-mockup.png',
    flag: '/images/01-brasil-circle.png',
  },
];

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
          <div className='container mx-auto p-3 lg:py-12 max-w-screen-xl '>
            <h1 className=' text-headingColor text-4xl md:text-4xl font-bold from-current mb-12 text-center italic'>
              CRONOGRAMA DE EVENTOS
            </h1>

            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0'>
              <div>
                <div className='bg-white max-w-sm rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 min-h-[25rem]'>
                  <div>
                    <div className='p-5 xl:px-5 py-2 h-max flex flex-col justify-center'>
                      <h2 className='text-xl text-gray-400 font-bold text-center mb-10 mt-5'>
                        Por onde passamos
                      </h2>

                      <div className=''>



                        {/*events.slice(1, 6).map((event) => (
                          <div key={event.id}>
                            <p className='text-md flex gap-4 items-center mb-2'>
                              <span className='event-date text-base tracking-wide bg-gray-400 font-medium text-white px-2 py-1 rounded-md'>
                                {event.date}
                              </span>{' '}
                              {event.title}
                            </p>
                          </div>
                        ))*/}
                      </div>

                      <button
                        onClick={openModal}
                        className=' text-center my-2 mx-auto text-md text-slate-600 hover:opacity-80 bg-yellow-300 py-2 px-4 rounded-lg font-medium'>
                        Mais antigas
                      </button>
                    </div>
                    <div>
                     
                    </div>
              
                  </div>
                 
                   
              </div>

    {/* Main modal */}
    {isModalOpen && (
                        <div
                          id='default-modal'
                          className='fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'>
                          <div className='relative min-h-96  w-full max-w-screen h-[calc(100%-10px)]'>
                            {/* Modal content */}
                            <div className='relative min-h-full mt-1  bg-white rounded-lg shadow dark:bg-gray-700'>
                              {/* Modal header */}
                              <div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
                                <h3 className='text-xl font-semibold text-gray-900 dark:text-white m-6'>
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

                                <ImageGallery/>
                                {/*events.map((event) => (
                                  <div key={event.id}>
                                    <p className='text-md flex gap-4 items-center mb-2'>
                                      <span className='event-date text-base tracking-wide bg-gray-400 font-medium text-white px-2 py-1 rounded-md'>
                                        {event.date}
                                      </span>{' '}
                                      {event.title}
                                    </p>
                                  </div>
                                ))*/}
                              </div>
                              {/* Modal footer */}
                            </div>
                          </div>
                        </div>
                      )}
                </div>



              {/*Próximo destino*/}
              <div>
                <div className='bg-white mb-2 max-w-sm rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 min-h-[25rem] h-max'>
                  <div>
                    <div className='p-5 xl:px-10 py-2 pb-6 h-max '>
                      <h2 className='text-2xl text-primary font-bold text-center mb-5 mt-5'>
                        Próximo destino
                      </h2>
                      {events.slice(0, 1).map((event) => (
                        <div key={event.id}>
                          <Image
                            src={event.url}
                            alt={event.title}
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
                            className='event-date text-xl tracking-wide bg-secondary font-medium text-white px-2 py-1'
                            style={{
                              position: 'relative',
                              top: '-20px',
                              borderRadius: '0px 5px 5px 5px',
                            }}>
                            {event.date}
                          </span>
                          <h3 className='text-2xl text-primary font-bold text-center mb-2 '>
                            {event.title}
                          </h3>
                          <p>
                           {event.summary}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/*Em breve*/}
              <div>
                <div>
                  <div className='bg-white rounded-lg max-w-sm shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 h-max min-h-[25rem]'>
                    <div className='px-5 xl:px-8 py-2 h-max flex flex-col justify-center'>
                      <h1 className='text-xl text-gray-400 font-bold text-center mb-10 mt-5'>
                        Em breve
                      </h1>

                      {events.slice(1, 6).map((event) => (
                        <div key={event.id}>
                                  <p className='flex items-center justify-between text-lg gap-1 mb-3'>
                        <span>
                          {' '}
                          <Image
                            src={event.flag}
                            alt=''
                            width={'30'}
                            height={'30'}
                            quality={90}
                            className='mr-2'
                          />
                        </span>{' '}
                        <span className='flex-1 '>{event.title}</span>
                        <span className='event-date text-bases tracking-wide font-bold text-slate-600 px-1 py-1  rounded-md'>
                        {event.date}
                        </span>
                      </p>
                  
                          
                        </div>
                      ))}

              

                      {/*  <button
                        onClick={openModal2}
                        className=' text-center my-2 mx-auto text-md text-slate-600 hover:opacity-80 bg-yellow-300 py-2 px-4 rounded-md font-medium'>
                        Mais antigas
                      </button>*/}
                    </div>

                    <div>
                    
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
