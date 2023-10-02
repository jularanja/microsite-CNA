import React from 'react';



const VideoSection = () => {
  return (
    <>
      <div className='px-6 py-1 lg:px-8 bg-light_green'>
        <div className='mx-auto max-w-2xl py-16 '>
          <div className='text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-primary sm:text-6xl'>
              Sobre o Projeto
            </h2>
            <p className='mt-6 text-gray-600'>
              Trata-se de uma carreta personalizada, com proposta multiuso, que
              apresentará o trabalho do Sistema aos participantes dos inúmeros
              eventos do agronegócio que acontecem no Brasil anualmente.
            </p>
            <div className='w-full max-w-screen-md mx-auto px-4 pt-6 lg:px-1 pt-4'>
              <video
                className='w-full rounded-md'
                controls
                >
                <source
                  src='/videos/video-agro-pelo-brasil.mp4'
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
