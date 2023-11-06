'use client';

import { Button, TextInput, Textarea } from 'flowbite-react';
import SocialMediaLinks from './SoccialMediaLinks';


export default function EmailForm() {
  return (
    <div
      id='contato'
      className='container  max-w-2xl md:max-w-4xl mx-auto my-24 flex justify-center gap-18 lg:gap-28 flex-col lg:flex-row'>
      <div
        className='flex max-w-sm lg:max-w-xl  mx-auto flex-col px-5 lg:px-10'
        style={{ minWidth: '' }}>
        <h2 className='text-gray-500  lg:mb-8 text-4xl md:text-5xl font-bold mb-4 from-current text-center md:text-left italic'>
          Fale Conosco
        </h2>
        <p className='text-center md:text-left text-gray-500 font-normal'>
          <span className='font-medium'>
            Sistema CNA / SENAR / Instituto CNA
          </span>{' '}
          <br />
          SGAN Quadra 601, Módulo K - Ed. Antônio Ernesto de Salvo <br />Brasília -
          Distrito Federal <br />
          <span className='font-medium pb-1 inline-block'>CEP:</span> 70830-903 <br />
          <span className='font-medium pb-1 inline-block'>Telefone:</span> (61) 2109-1400 <br />
          <span className='font-medium pb-1 inline-block'>E-mail:</span> cna@cna.org.br / senar@senar.org.br
        </p>
        
        <SocialMediaLinks />
      </div>
      <div className='flex flex-1 justify-center'>
        <form
         
          className='flex max-w-md flex-col gap-4 mx-auto'>
          <p className='text-center md:text-left text-gray-500 font-medium mt-2'>
            Ficou interessado em contratar a carreta? <br /> Vamos trabalhar
            juntos!
          </p>
          <div>
            <TextInput id='name' placeholder='Seu nome' required />
          </div>

          <div>
            <TextInput
              id='email'
              placeholder='Seu email'
              required
              type='email'
            />
          </div>

          <div>
            <Textarea id='msg' placeholder='Sua mensagem' required rows={4} />
          </div>

          <div className='flex justify-center lg:justify-end'>
            <button
              className='bg-gray-400 text-white text-center my-2 text-md hover:opacity-80 py-2 px-4 rounded-md font-medium'
              style={{ width: '150px' }}
              type='submit'>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
