'use client';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function MultiUseCarousel() {
  return (
    <>
      <div
        className='container mx-auto px-4 my-2S mt-20'
        style={{ maxHeight: '800px' }}>
        <h2 className='text-headingColor mb-20 lg:mb-10 text-4xl md:text-5xl font-bold from-current text-center italic'>
          Múltiplos usos
        </h2>
        <div className='hidden md:flex justify-center'>
          <Carousel
            id='slider'
            slide={false}
            className='h-28 max-w-screen-lg'
            style={{ minHeight: '500px', maxHeight: '800px' }}>
            <div className='columns-2'>
              <div
                className='h-full flex justify-center items-center'
                style={{
                  backgroundImage: `url('/images/espacogourmet.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-4xl font-bold'>
                  Espaço gourmet
                </span>
              </div>

              <div
                className='bg-white flex items-center'
                style={{
                  height: '-webkit-fill-available',
                  marginLeft: '-15px',
                  borderRadius: '0',
                }}>
                <p className='p-10 text-lg'  style={{paddingRight: '5.5rem'}}>
                  Espaço Gourmet A carreta vai apresentar três configurações em
                  seu espaço multiuso, a primeira é um ambiente destinado a
                  alimentação, o “espaço gourmet”. Para degustação de alimentos
                  artesanais e tradicionais. O espaço será equipado de bancada
                  com capacidade para até 18 visitantes sentados e uma cozinha
                  gourmet equipada com equipamentos de última geração.
                </p>
              </div>
            </div>

            <div className='columns-2'>
              <div
                className='h-full flex justify-center items-center'
                style={{
                  backgroundImage: `url('/images/palestras.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-4xl font-bold'> Apresentações Diversas</span>
              </div>

              <div
                className='bg-white flex items-center'
                style={{
                  height: '-webkit-fill-available',
                  marginLeft: '-15px',
                  borderRadius: '0',
                }}>
                <p className='p-10 text-lg'  style={{paddingRight: '5.5rem'}}>
                A segunda configuração vai ser destinada a “apresentações
                diversas”, shows, palestras, oficinas, exposições, entre outros.
                Nesse momento o painel de vidro da sala multiuso se abre e se
                transforma em um grande palco se conectando ao público presente.
                </p>
              </div>
            </div>

            
            <div className='columns-2'>
              <div
                className='h-full flex justify-center items-center'
                style={{
                  backgroundImage: `url('/images/sensorial.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-4xl font-bold'> Espaço Sensorial</span>
              </div>

              <div
                className='bg-white flex items-center'
                style={{
                  height: '-webkit-fill-available',
                  marginLeft: '-15px',
                  borderRadius: '0',
                }}>
                <p className='p-10 text-lg'  style={{paddingRight: '5.5rem'}}>
                Finalmente, a terceira configuração é o que denominamos “espaço
                sensorial”. Ali serão projetados imagens, cheiros e sons que
                trarão grande impacto à experiência do visitante. É neste espaço
                que vamos apresentar conteúdos imersivos para proporcionar ao
                visitante uma experiência única e inesperada.
                </p>
              </div>
            </div>

            <div className='columns-2'>
              <div
                className='h-full flex justify-center items-center'
                style={{
                  backgroundImage: `url('/images/podcast.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-4xl font-bold'>  Estúdio de Podcast</span>
              </div>

              <div
                className='bg-white flex items-center'
                style={{
                  height: '-webkit-fill-available',
                  marginLeft: '-15px',
                  borderRadius: '0',
                }}>
                <p className='p-10 text-lg ' style={{paddingRight: '5.5rem'}}>
                A carreta vai ter ainda um ”estúdio” para gravações de
                entrevistas e lives. O ambiente terá capacidade para até quatro
                participantes. Conta ainda com controle de áudio e vídeo,
                revestimento acústico, microfones e câmeras de última geração.
                </p>
              </div>
            </div>

       
          </Carousel>
        </div>
      </div>

      <div className='block md:hidden'>
        <div className='flex flex-col justify-center md:hidden'>
          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/espacogourmet.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '200px',
              }}></div>

            <div
              className='bg-white'
              style={{
                height: '-webkit-fill-available',
                borderRadius: '0',
              }}>
              <p className='p-5 text-lg '>
                <span className='text-primary block text-3xl font-medium mb-5'>
                  Espaço gourmet
                </span>
                A carreta vai apresentar três configurações em seu espaço
                multiuso, a primeira é um ambiente destinado a alimentação, o
                “espaço gourmet”. Para degustação de alimentos artesanais e
                tradicionais. O espaço será equipado de bancada com capacidade
                para até 18 visitantes sentados e uma cozinha gourmet equipada
                com equipamentos de última geração.
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/palestras.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '200px',
              }}></div>

            <div
              className='bg-white'
              style={{
                height: '-webkit-fill-available',
                borderRadius: '0',
              }}>
              <p className='p-5 text-lg '>
                <span className='text-primary block text-3xl font-medium mb-5 '>
                  Apresentações Diversas
                </span>
                A segunda configuração vai ser destinada a “apresentações
                diversas”, shows, palestras, oficinas, exposições, entre outros.
                Nesse momento o painel de vidro da sala multiuso se abre e se
                transforma em um grande palco se conectando ao público presente.
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/sensorial.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '200px',
              }}></div>

            <div
              className='bg-white'
              style={{
                height: '-webkit-fill-available',
                borderRadius: '0',
              }}>
              <p className='p-5 text-lg '>
                <span className='text-primary block text-3xl font-medium mb-5 '>
                  Espaço Sensorial
                </span>
                Finalmente, a terceira configuração é o que denominamos “espaço
                sensorial”. Ali serão projetados imagens, cheiros e sons que
                trarão grande impacto à experiência do visitante. É neste espaço
                que vamos apresentar conteúdos imersivos para proporcionar ao
                visitante uma experiência única e inesperada.
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/podcast.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '200px',
              }}></div>

            <div
              className='bg-white'
              style={{
                height: '-webkit-fill-available',
                borderRadius: '0',
              }}>
              <p className='p-5 text-lg '>
                <span className='text-primary block text-3xl font-medium mb-5 '>
                  Estúdio de Podcast
                </span>
                A carreta vai ter ainda um ”estúdio” para gravações de
                entrevistas e lives. O ambiente terá capacidade para até quatro
                participantes. Conta ainda com controle de áudio e vídeo,
                revestimento acústico, microfones e câmeras de última geração.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
