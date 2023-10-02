import React from 'react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  return (
    <div className='relative isolate px-6 pt-14 lg:px-8'>
   
      <div className='mx-auto max-w-2xl py-10 sm:py-48'>
     
        <div className='text-center'>
          <h3 className='font-bold tracking-tight text-secondary sm:text-6xl'>CARRETA</h3>
          <h1 className='text-4xl font-bold tracking-tight text-primary sm:text-6xl'>
            Agro pelo Brasil
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
          Uma nova forma de levar o Sistema CNA/Senar/ICNA aos quatro cantos deste país
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-full bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'>
              Saiba mais
            </a>
           
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default HeroSection;
