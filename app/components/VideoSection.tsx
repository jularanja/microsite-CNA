import React from 'react';



const VideoSection = () => {
  return (
    <>
      <div className='px-6 pt-14 lg:px-8 bg-light_green'>
        <div className='mx-auto max-w-2xl py-10 sm:py-48'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-primary sm:text-6xl'>
              Sobre o Projeto
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Trata-se de uma carreta personalizada, com proposta multiuso, que
              apresentará o trabalho do Sistema aos participantes dos inúmeros
              eventos do agronegócio que acontecem no Brasil anualmente.
            </p>
            <div className='w-full max-w-screen-md mx-auto'>
              <video
                className='w-full rounded-md'
                controls
                poster='/path/to/poster-image.jpg'>
                <source
                  src='/path/to/video.mp4'
                  type='video/mp4'
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
