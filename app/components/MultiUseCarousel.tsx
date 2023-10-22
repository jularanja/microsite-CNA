'use client';
import { Carousel } from 'flowbite-react';

export default function MultiUseCarousel() {
  return (
    <div className='container mx-auto px-4 my-8'>
      <div className='columns-1'>
        <Carousel slide={false} style={{height: '40rem'}}>
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          />
        </Carousel>
      </div>
    </div>
  )
}