import React from 'react';
import HeroSection from './components/HeroSection';
import Post from './components/Post';
import Carousel from './components/Carousel';
import VideoSection from './components/VideoSection';

const Home = () => {
  return (
    <>
      <HeroSection /> 
      <VideoSection/> 
      <Carousel/>
      <Post />
    </>
  );
};

export default Home;
