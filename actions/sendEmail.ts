'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  

  //montar o conteúdo com os elementos do form, e concatena, colocando no text abaixo

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'mareslaranja@gmail.com',
    subject: `Mensagem de ${name}`,
    text: 'Hello!',
  });
};
