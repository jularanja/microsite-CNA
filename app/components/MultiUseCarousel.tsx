'use client';
import { Carousel } from 'flowbite-react';

export default function MultiUseCarousel() {
  return (
    <div className='container mx-auto px-4 my-8'>
      <div className='columns-1'>
        <Carousel slide={false} style={{height: '60rem'}}>
          <div className='columns-2'>
            <span
              style={{
                position: 'absolute',
                marginLeft: '17%',
                color: 'white',
                fontSize: 'xx-large',
                marginTop: '23%',
                fontWeight: 'bold'
              }}
            >
              Espaço gourmet
            </span>
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            />
            <div className='bg-white' 
              style={{
                height: '-webkit-fill-available', 
                marginLeft: '-15px',
                borderRadius: '0'
              }}
            >
              <h2 className=" text-headingColor font-bold from-current mb-8 text-center italic">Múltiplos usos</h2>
              <p>Bjorn the chair kallax kallax tall blond women, Thor shieldmaiden scandinavia besta Valhalla Northumbria Leif Erikson hej. </p>
            </div>
          </div>
          <div className='columns-2'>
            <span
              style={{
                position: 'absolute',
                marginLeft: '17%',
                color: 'white',
                fontSize: 'xx-large',
                marginTop: '23%',
                fontWeight: 'bold'
              }}
            >
              Espaço gourmet
            </span>
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            />
              <div className='bg-white' 
                style={{
                  height: '-webkit-fill-available', 
                  marginLeft: '-15px',
                  borderRadius: '0'
                }}
              >
              <h2 className=" text-headingColor font-bold from-current mb-8 text-center italic">Múltiplos usos</h2>
              <p>Bjorn the chair kallax kallax tall blond women, Thor shieldmaiden scandinavia besta Valhalla Northumbria Leif Erikson hej. </p>
            </div>
          </div>
          <div className='columns-2'>
            <span
              style={{
                position: 'absolute',
                marginLeft: '17%',
                color: 'white',
                fontSize: 'xx-large',
                marginTop: '23%',
                fontWeight: 'bold'
              }}
            >
              Espaço gourmet
            </span>
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            />
              <div className='bg-white' 
                style={{
                  height: '-webkit-fill-available', 
                  marginLeft: '-15px',
                  borderRadius: '0'
                }}
              >
              <h2 className=" text-headingColor font-bold from-current mb-8 text-center italic">Múltiplos usos</h2>
              <p>Bjorn the chair kallax kallax tall blond women, Thor shieldmaiden scandinavia besta Valhalla Northumbria Leif Erikson hej. </p>
            </div>
          </div>
          <div className='columns-2'>
            <span
              style={{
                position: 'absolute',
                marginLeft: '17%',
                color: 'white',
                fontSize: 'xx-large',
                marginTop: '23%',
                fontWeight: 'bold'
              }}
            >
              Espaço gourmet
            </span>
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            />
              <div className='bg-white' 
                style={{
                  height: '-webkit-fill-available', 
                  marginLeft: '-15px',
                  borderRadius: '0'
                }}
              >
              <h2 className=" text-headingColor font-bold from-current mb-8 text-center italic">Múltiplos usos</h2>
              <p>Bjorn the chair kallax kallax tall blond women, Thor shieldmaiden scandinavia besta Valhalla Northumbria Leif Erikson hej. </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}