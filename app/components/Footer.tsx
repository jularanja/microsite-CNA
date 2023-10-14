import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className='w-full py-16 bg-light_green  dark:bg-gray-900'>
        <div className=' max-w-screen-lg flex flex-col md:flex-row gap-4 sm:gap-32 mx-auto p-4 md:py-8 justify-center '>
          <div className='flex items-center justify-center gap-14'>
            <Link href={'/'} className='flex items-center justify-center'>
              {' '}
              <Image
                className='w-24 sm:w-36 text-center '
                src='/cna-vector-logo.png'
                alt='logo CNA'
                width={300}
                height={300}
              />
            </Link>
            <Link  href={'/'} className='flex items-center justify-center'>
              {' '}
              <Image
                className='h-10 sm:h-10 w-auto'
                src='images/logo-agro-pelo-brasil.svg'
                alt='logo Agro pelo Brasil'
                width={256}
                height={70}
              />
            </Link>
          </div>
          <div className='sm:flex sm:items-center sm:justify-between'>
           
          </div>
          <div className='flex flex-wrap items-center text-sm mb-6 text-center sm:text-left  font-medium text-gray-500 sm:mb-0  dark:text-gray-400'>
            <p className='flex-auto w-96'>
              Sistema CNA / SENAR / Instituto CNA SGAN Quadra 601, Módulo K -
              Ed. Antônio Ernesto de SalvoBrasília - Distrito Federal CEP:
              70830-903 Telefone: (61) 2109-1400 E-mail: cna@cna.org.br /
              senar@senar.org.br
            </p>
          </div>
        </div>
        <div className='max-w-screen-lg mx-auto'>
          <hr className='my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8' />
          <span className='block text-xs text-gray-500 text-center dark:text-gray-400'>
            © CNA 2023 - TODOS OS DIREITOS RESERVADOS
          </span>
        </div>
      </footer>
    </>
  );
}
