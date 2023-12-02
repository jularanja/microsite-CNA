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
                  backgroundImage: `url('/images/gastronomia.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-3xl font-bold text-center'>
                  DEGUSTAÇÃO DE ALIMENTOS ARTESANAIS E TRADICIONAIS
                </span>
              </div>

              <div
                className='bg-white flex items-center'
                style={{
                  height: '-webkit-fill-available',
                  marginLeft: '-15px',
                  borderRadius: '0',
                }}>
                <p className='p-10 text-lg' style={{ paddingRight: '5.5rem' }}>
                  <span className='font-bold'>
                    - DEGUSTAÇÃO DE ALIMENTOS ARTESANAIS E TRADICIONAIS
                  </span>{' '}
                  - é um ambiente destinado a alimentação, o “espaço gourmet”.
                  Para degustação de alimentos artesanais e tradicionais. O
                  espaço será equipado de bancada com capacidade para até 17
                  visitantes sentados e uma cozinha gourmet equipada com
                  equipamentos de última geração.
                </p>
              </div>
            </div>

            <div className='columns-2'>
              <div
                className='h-full flex justify-center items-center'
                style={{
                  backgroundImage: `url('/images/sensorial.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-4xl font-bold'>
                  {' '}
                  ESPAÇO SENSORIAL
                </span>
              </div>

              <div
                className='bg-white flex items-center'
                style={{
                  height: '-webkit-fill-available',
                  marginLeft: '-15px',
                  borderRadius: '0',
                }}>
                <p className='p-10 text-lg' style={{ paddingRight: '5.5rem' }}>
                  <span className='font-bold'> - ESPAÇO SENSORIAL -</span> Ali
                  serão projetados imagens e sons que trarão grande impacto à
                  experiência do visitante. É neste espaço que vamos apresentar
                  conteúdos imersivos para proporcionar ao visitante uma
                  experiência única e inesperada.
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
                <span className='text-white text-4xl font-bold'>
                  {' '}
                  PALESTRAS
                </span>
              </div>

              <div
                className='bg-white flex items-center'
                style={{
                  height: '-webkit-fill-available',
                  marginLeft: '-15px',
                  borderRadius: '0',
                }}>
                <p className='p-10 text-lg' style={{ paddingRight: '5.5rem' }}>
                  <span className='font-bold'> - PALESTRAS - </span> Estão
                  previstas diversas palestras com temas relevantes do setor.
                </p>
              </div>
            </div>

            <div className='columns-2'>
              <div
                className='h-full flex justify-center items-center'
                style={{
                  backgroundImage: `url('/images/oficinas.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-4xl font-bold'> OFICINAS</span>
              </div>

              <div
                className='bg-white flex items-center'
                style={{
                  height: '-webkit-fill-available',
                  marginLeft: '-15px',
                  borderRadius: '0',
                }}>
                <p className='p-10 text-lg' style={{ paddingRight: '5.5rem' }}>
                  <span className='font-bold'>- OFICINAS -</span> A realização
                  de oficinas também será outro atrativo a ser realizado pelas
                  Federações parceiras.
                </p>
              </div>
            </div>

            <div className='columns-2'>
              <div
                className='h-full flex justify-center items-center'
                style={{
                  backgroundImage: `url('/images/feirinha.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-2xl font-bold text-center'>
                  {' '}
                  FEIRA DE PRODUTOS ARTESANAIS E TRADICIONAIS
                </span>
              </div>

              <div
                className='bg-white flex items-center'
                style={{
                  height: '-webkit-fill-available',
                  marginLeft: '-15px',
                  borderRadius: '0',
                }}>
                <p className='p-10 text-lg ' style={{ paddingRight: '5.5rem' }}>
                  <span className='font-bold'>
                    - FEIRA DE PRODUTOS ARTESANAIS E TRADICIONAIS -
                  </span>{' '}
                  Do lado externo da carreta, vamos ter uma “feira” para
                  comercialização de produtos artesanais e tradicionais, onde os
                  visitantes além de participarem de degustações oferecidas na
                  carreta, vão poder ainda comprar os produtos que desejarem.
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
                <span className='text-white text-4xl font-bold'>
                  {' '}
               ESTÚDIO PODCAST
                </span>
              </div>

              <div
                className='bg-white flex items-center'
                style={{
                  height: '-webkit-fill-available',
                  marginLeft: '-15px',
                  borderRadius: '0',
                }}>
                <p className='p-10 text-lg ' style={{ paddingRight: '5.5rem' }}>
                <span className='font-bold'> - ESTÚDIO PODCAST - </span>A carreta vai ter ainda um ”estúdio” para gravações de entrevistas e lives. O ambiente terá capacidade para até quatro participantes.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      {/* Carousel multiuso mobile */}
      <div className='block md:hidden'>
        <div className='flex flex-col justify-center md:hidden'>
          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/gastronomia.jpg')`,
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
                  DEGUSTAÇÃO DE ALIMENTOS ARTESANAIS E TRADICIONAIS
                </span>
                É um ambiente destinado a alimentação, o “espaço gourmet”. Para
                degustação de alimentos artesanais e tradicionais. O espaço será
                equipado de bancada com capacidade para até 17 visitantes
                sentados e uma cozinha gourmet equipada com equipamentos de
                última geração.
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/sensorial.jpg')`,
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
                  ESPAÇO SENSORIAL
                </span>
                Ali serão projetados imagens e sons que trarão grande impacto à
                experiência do visitante. É neste espaço que vamos apresentar
                conteúdos imersivos para proporcionar ao visitante uma
                experiência única e inesperada.
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
                PALESTRAS
                </span>
                Estão previstas diversas palestras com temas relevantes do setor.
                <br/>
                
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/oficinas.jpg')`,
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
                 OFICINAS
                </span>
                 A realização de oficinas também será outro atrativo a ser realizado pelas Federações parceiras.


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
                ESTÚDIO PODCAST
                </span>
          A carreta vai ter ainda um ”estúdio” para gravações de entrevistas e lives. O ambiente terá capacidade para até quatro participantes.

          <br/><br/>

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
