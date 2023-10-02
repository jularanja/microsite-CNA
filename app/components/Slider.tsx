import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const Slider = () => {
  return (
    <>
      <div className='px-6 py-14 lg:px-8 bg-primary text-center'>
        <div className='mx-auto max-w-2xl py-16 '>
          <h2 className='text-3xl font-bold tracking-tight text-secondary  sm:text-6xl'>
            Múltiplos usos
          </h2>
          <p className='text-secondary pt-4 '>
            ***slide em que a imagem muda de acordo com o texto. Uma imagem por
            parágrafo. Aqui vai até o texto da feirinha. Se for possível mudar
            também essa plantinha de disposição do layout da carreta ficaria
            show***
          </p>

          <p className='text-white pt-4 '>
            Finalmente, a terceira configuração é o que denominamos “espaço
            sensorial”. Ali serão projetados imagens, cheiros e sons que trarão
            grande impacto à experiência do visitante. É neste espaço que vamos
            apresentar conteúdos imersivos para proporcionar ao visitante uma
            experiência única e inesperada.
            <br />
            A carreta vai apresentar três configurações em seu espaço multiuso,
            a primeira é um ambiente destinado a alimentação, o “espaço
            gourmet”.
            <br />
            Para degustação de alimentos artesanais e tradicionais. O espaço
            será equipado de bancada com capacidade para até 18 visitantes
            sentados e uma cozinha gourmet equipada com equipamentos de última
            geração.
          </p>
        </div>
      </div>
    </>
  );
};

export default Slider;
