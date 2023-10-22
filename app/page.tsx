import React from 'react';
import HeroSection from './components/HeroSection';
import Post from './components/Post';
import Slider from './components/Slider';
import VideoSection from './components/VideoSection';
import Cronograma from './components/Cronograma';
import MultiUseCarousel from './components/MultiUseCarousel';

const Home = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <Cronograma />
      <Slider />
      <Post />
      <MultiUseCarousel />
    </>
  );
};

export default Home;
