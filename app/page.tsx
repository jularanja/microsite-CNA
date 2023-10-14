import React from 'react';
import HeroSection from './components/HeroSection';
import Post from './components/Post';
import Slider from './components/Slider';
import VideoSection from './components/VideoSection';
import Teste from './components/teste';

const Home = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />

      <Slider />
      <Teste/>

      <Post />
    </>
  );
};

export default Home;
