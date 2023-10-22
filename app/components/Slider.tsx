import React from 'react';
import Image from 'next/image';
import MultiUseCarousel from './MultiUseCarousel';

const Slider: React.FC = () => {
  return (    
    <section id='participar' className='container py-10 mx-auto'>      
      <MultiUseCarousel />
    </section>    
  );
};

export default Slider;
