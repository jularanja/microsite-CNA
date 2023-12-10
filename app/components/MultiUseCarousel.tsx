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
                  backgroundImage: `url('/images/oficinasecursos.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-3xl font-bold text-center'>
                  Oficinas e cursos
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
                  Ambiente para ações de capacitação do Senar.
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
                  Palestras
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
                  No ambiente multiuso, o painel de vidro pode se abrir criando
                  um palco coberto voltado para a área externa.
                </p>
              </div>
            </div>

            <div className='columns-2'>
              <div
                className='h-full flex justify-center items-center'
                style={{
                  backgroundImage: `url('/images/reunioes.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-4xl font-bold'> Reuniões</span>
              </div>

              <div
                className='bg-white flex items-center'
                style={{
                  height: '-webkit-fill-available',
                  marginLeft: '-15px',
                  borderRadius: '0',
                }}>
                <p className='p-10 text-lg' style={{ paddingRight: '5.5rem' }}>
                  Ambiente configurado com bancada para até 17 pessoas sentadas,
                  equipada com tomadas e cabos de rede.{' '}
                </p>
              </div>
            </div>

            <div className='columns-2'>
              <div
                className='h-full flex justify-center items-center'
                style={{
                  backgroundImage: `url('/images/apresentacoesculturais.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-4xl font-bold text-center'>
                  {' '}
                  Apresentações culturais
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
                  O palco pode ser utilizado para diversas apresentações
                  culturais/artísticas.
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
                  Feira de produtos artesanais e tradicionais
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
                  No ambiente externo haverá feira para comercialização de
                  produtos artesanais e tradicionais.{' '}
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
                  Estúdio podcast
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
                  Estúdio para gravações de entrevistas e lives. O ambiente tem
                  capacidade para até quatro participantes, revestimento
                  acústico e os mais modernos equipamentos de áudio e vídeo.{' '}
                </p>
              </div>
            </div>

            <div className='columns-2'>
              <div
                className='h-full flex justify-center items-center'
                style={{
                  backgroundImage: `url('/images/cozinhaexperimental.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-4xl font-bold text-center'>
                  {' '}
                  Cozinha experimental
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
                  Espaço para degustação de alimentos, equipado com bancada para
                  até 17 pessoas sentadas e uma cozinha funcional.
                </p>
              </div>
            </div>

            <div className='columns-2'>
              <div
                className='h-full flex justify-center items-center'
                style={{
                  backgroundImage: `url('/images/exibicaodevideos.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-4xl font-bold text-center'>
                  {' '}
                  Exibição de vídeos institucionais
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
                  A exibição de filmes é outra possibilidade disponível dentre
                  as várias configurações do espaço multiuso.
                </p>
              </div>
            </div>

            <div className='columns-2'>
              <div
                className='h-full flex justify-center items-center'
                style={{
                  backgroundImage: `url('/images/deck.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-4xl font-bold text-center'>
                  {' '}
                  Deck
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
                  Espaço de convivência no topo da carreta.
                </p>
              </div>
            </div>

            <div className='columns-2'>
              <div
                className='h-full flex justify-center items-center'
                style={{
                  backgroundImage: `url('/images/imersao.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px',
                }}>
                <span className='text-white text-4xl font-bold text-center'>
                  {' '}
                  Imersão
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
                  Experiência imersiva impactante por meio de múltiplas
                  projeções de vídeos e sons.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/*//////////// Carousel multiuso mobile ///////////////*/}
      <div className='block md:hidden'>
        <div className='flex flex-col justify-center md:hidden'>
          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/oficinasecursos.jpg')`,
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
                  Oficinas e cursos
                </span>
                Ambiente para ações de capacitação do Senar.
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
                  Palestras
                </span>
                No ambiente multiuso, o painel de vidro pode se abrir criando um
                palco coberto voltado para a área externa.
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/reunioes.jpg')`,
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
                  Reuniões
                </span>
                Ambiente configurado com bancada para até 17 pessoas sentadas,
                equipada com tomadas e cabos de rede.
                <br />
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/apresentacoesculturais.jpg')`,
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
                  Apresentações culturais
                </span>
                O palco pode ser utilizado para diversas apresentações
                culturais/artísticas.
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/feiradeprodutos.jpg')`,
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
                  Feira de produtos artesanais e tradicionais
                </span>
                No ambiente externo haverá feira para comercialização de
                produtos artesanais e tradicionais.
                <br />
                <br />
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
                  Estúdio podcast
                </span>
                Estúdio para gravações de entrevistas e lives. O ambiente tem
                capacidade para até quatro participantes, revestimento acústico
                e os mais modernos equipamentos de áudio e vídeo.
                <br />
                <br />
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/cozinhaexperimental.jpg')`,
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
                  Cozinha experimental
                </span>
                Espaço para degustação de alimentos, equipado com bancada para
                até 17 pessoas sentadas e uma cozinha funcional.
                <br />
                <br />
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/exibicaodevideos.jpg')`,
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
                  Exibição de vídeos institucionais
                </span>
                A exibição de filmes é outra possibilidade disponível dentre as
                várias configurações do espaço multiuso.
                <br />
                <br />
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/deck.jpg')`,
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
                Deck
                </span>
                Espaço de convivência no topo da carreta.
                <br />
                <br />
              </p>
            </div>
          </div>

          <div className='mb-4'>
            <div
              className='justify-center items-center'
              style={{
                backgroundImage: `url('/images/imersao.jpg')`,
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
                Imersão
                </span>
                Experiência imersiva impactante por meio de múltiplas projeções de vídeos e sons.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
