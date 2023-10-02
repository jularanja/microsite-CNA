import React from 'react';
import HeroSection from './components/HeroSection';
import Post from './components/Post';
import Slider from './components/Slider';
import VideoSection from './components/VideoSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <React.StrictMode>
        <Slider />
      </React.StrictMode>

      <Post />
    </>
  );
};

export default Home;
