'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const VideoSection = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [videoLoading, setVideoLoading] = useState<boolean>(true);

  const openModal = () => {
    setModal(!modal);
  };

  // Initialize a state variable to control visibility
  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div
        id='apresentacao'
        className='px-6 py-1 pb-10 mt-6  lg:px-8 lg:min-h-screen	'>
        <div className='mx-auto max-w-4xl md:py-16 mt-6 '>
          <div className='text-center'>
            <h2 className='text-headingColor text-3xl md:text-4xl font-bold from-current mb-8 text-center italic'>
              SOBRE A CARRETA AGRO PELO BRASIL
            </h2>
            <p className='my-6 text-xl text-gray-600 text-left'>
              A carreta <strong className='text-headingColor'>Agro pelo Brasil</strong> traz uma proposta multiuso para
              apresentar o trabalho do Sistema CNA nos inúmeros eventos do
              agronegócio que acontecem no Brasil.
            </p>
            <p className='my-6 text-xl text-gray-600 text-left'>
              Possui um ambiente destinado à harmonização e degustação de
              alimentos, denominado <strong className='text-headingColor'>cozinha experimental</strong>. O espaço traz uma
              bancada, equipamentos, utensílios e capacidade para 17 pessoas
              sentadas.
            </p>
            <p className='my-6 text-xl text-gray-600 text-left'>
              {' '}
              <strong className='text-headingColor'>Espaço multiuso:</strong> destina-se a palestras, reuniões, oficinas e
              exibição de vídeos institucionais. O painel de vidro lateral pode
              ser aberto e criar um palco conectado ao público externo.{' '}
            </p>

            <p className='my-6 text-xl text-gray-600 text-left'>
              {' '}
              <strong className='text-headingColor'>Espaço sensorial:</strong> onde os visitantes terão uma experiência única e
              imersiva a partir de projeções de vídeos e sons impactantes.{' '}
            </p>
            <p className='my-6 text-xl text-gray-600 text-left'>
              {' '}
              <strong className='text-headingColor'>Estúdio</strong> para gravações de entrevistas e lives. O ambiente tem
              capacidade para até quatro participantes e é equipado com controle
              de áudio e vídeo, revestimento acústico, microfones e câmeras de
              última geração. O material produzido pode ser transmitido em tempo
              real, via internet.{' '}
            </p>
            <p className='my-6 text-xl text-gray-600 text-left'>
            <strong className='text-headingColor'>Feira de produtos artesanais e tradicionais</strong> montada no ambiente
              externo, para venda de produtos regionais.
            </p>

    
            <div className='sm:my-20'>
              <div onClick={toggleVisibility}>
                <button
                  onClick={openModal}
                  className='w-full flex justify-center'>
                  {isVisible && (
                    <div
                      className='w-full max-w-2xl rounded-3xl dark:border-gray-700 bg-center bg-no-repeat bg-[length:110%_auto]'
                      style={{
                        backgroundImage: 'url("/images/video-thumbnail.png")',
                        minHeight: '370px',
                      }}></div>
                  )}
                  {modal ? (
                    <section className='modal__bg'>
                      <div className='modal__align'>
                        <div className='modal__content'>
                          <div className='modal__video-align'>
                            <div>
                              {' '}
                              <video
                                className='w-full mt-8 mb-8 h-auto max-w-full border-gray-200 border rounded-3xl dark:border-gray-700'
                                autoPlay>
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
                    </section>
                  ) : null}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
