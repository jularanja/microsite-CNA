'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, TextInput, Textarea } from 'flowbite-react';
import SocialMediaLinks from './SoccialMediaLinks';
import { sendEmail } from '@/actions/sendEmail';
import { useState } from 'react';

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_ikyom4n',
          'template_j22r5zx',
          form.current,
          'GWdNwNCR1oAw0oss_'
        )
        .then((result) => {
          console.log(result.text);
          setIsSuccess(true);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <>
      <div className='flex flex-1 justify-center'>
        <form
          className='flex max-w-md flex-col gap-4 mx-auto'
          ref={form}
          onSubmit={sendEmail}>
          <p className='text-center md:text-left text-gray-500 font-medium mt-2'>
            Ficou interessado em contratar a carreta? <br /> Vamos trabalhar
            juntos!
          </p>
          <TextInput
            type='text'
            name='user_name'
            placeholder='Seu nome'
            required
          />

          <TextInput
            type='email'
            name='user_email'
            placeholder='Seu email'
            required
          />

          <Textarea name='message' />
          <input
            className='bg-gray-400 text-white text-center my-2 text-md hover:opacity-80 py-2 px-4 rounded-md font-medium'
            style={{ width: '150px' }}
            type='submit'
            value='Enviar'
          />
           {isSuccess && (
        <p className=' bg-headingColor text-white text-center font-medium p-4 '>
          Mensagem enviada com sucesso!
        </p>
      )}
        </form>
      </div>

   
    </>
  );
};

export default ContactUs;
