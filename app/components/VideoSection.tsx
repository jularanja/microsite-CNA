'use client';
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
            <p className='my-6 text-xl text-gray-600'>
              Trata-se de uma Carreta personalizada, com proposta multiuso, que
              apresentará o trabalho do Sistema aos participantes dos inúmeros
              eventos do agronegócio que acontecem no Brasil anualmente. A
              carreta vai apresentar três configurações em seu espaço multiuso,
              a primeira é um ambiente destinado a alimentação, o “espaço
              gourmet”. Para degustação de alimentos artesanais e tradicionais.
              O espaço será equipado de bancada com capacidade para até 17
              visitantes sentados e uma cozinha gourmet equipada com
              equipamentos de última geração. A segunda configuração vai ser
              destinada a “apresentações diversas” palestras, oficinas,
              exposições, apresentações entre outros. Nesse momento o painel de
              vidro da sala multiuso se abre e se transforma em um grande palco
              se conectando ao público presente.
            </p>
            <p className='my-6 text-xl text-gray-600'>
              Finalmente, a terceira configuração é o que denominamos “espaço
              sensorial”. Ali serão projetados imagens e sons que trarão grande
              impacto à experiência do visitante. É neste espaço que vamos
              apresentar conteúdos imersivos para proporcionar ao visitante uma
              experiência única e inesperada. A carreta vai ter ainda um
              ”estúdio” para gravações de entrevistas e lives. O ambiente terá
              capacidade para até quatro participantes. Conta ainda com controle
              de áudio e vídeo, revestimento acústico, microfones e câmeras de
              última geração. Do lado externo da carreta, vamos ter uma “feira”
              para comercialização de produtos artesanais e tradicionais, onde
              os visitantes além de participarem de degustações oferecidas na
              carreta, vão poder ainda comprar os produtos que desejarem.
              <br/> <br/>
            </p>
            <div className=''>
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
