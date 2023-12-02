import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className='py-16 bg-white translate-y-6 dark:bg-gray-900 rounded-t-3xl' style={{maxWidth: '80%',
    margin: '0 auto'}}>
        <div className=' max-w-screen-lg flex flex-col md:flex-row gap-4 sm:gap-32 mx-auto p-4 md:py-8 justify-center '>
          <div className='flex items-center justify-center gap-14'>
       
            <Link  href={'/'} className='flex items-center justify-center'>
              {' '}
              <Image
                className='h-20 w-auto'
                src='images/logo-cna-senar-icna.svg'
                alt='logo Agro pelo Brasil'
                width={256}
                height={70}
              />
            </Link>
          </div>
         
         
        </div>
        <div className='max-w-screen-lg mx-auto'>
          <span className='block font-medium text-xs md:text-md text-primary text-center '>
            © CNA 2023 - TODOS OS DIREITOS RESERVADOS
          </span>
        </div>
      </footer>
    </>
  );
}
