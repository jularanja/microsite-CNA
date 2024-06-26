import Image from 'next/image';

const HeroSection = () => {
  return (
    <div
      className={`before:block before:absolute before:inset-0 before:-z-50 before:bg-gradient-to-b before:from-white before:from-30%  before:via-light_gray before:opacity-70 relative isolate py-20 px-6 sm:pt-14 lg:px-8 lg:min-h-80vh bg-bottom bg-no-repeat bg-auto lg:bg-contain `}
      style={{ backgroundImage: 'url("/images/bg-hero-cna.png")' }}>
      <div className='mx-auto max-w-7xl py-10 sm:py-32'>
        <div className='text-center p-6 lg:text-left lg:max-w-lg'>
          <div className='text-center flex justify-center'>
            <Image
              className='min-h-56 sm:h-36 w-auto md:translate-x-[-3em] lg:translate-x-[-8em]'
              src='images/logo-agro-brasil.svg'
              alt='logo-cna-senar-icna'
              width={300}
              height={70}
            />
          </div>
          <div className='text-center my-4 mb-8 md:py-14 flex justify-center relative lg:absolute lg:left-1/2 lg:top-48 max-w-screen'>
            <Image
              className='min-w-96 h-auto mt-10 md:ml-[-145px]'
              src='/images/caminhao_agro_pelo_brasil.png'
              alt='imagem-carreta-3D'
              width={1920}
              height={905}
            />
          </div>
          <p className='my-8 md:my-1 m-auto max-w-md text-xl font-medium leading-7 text-gray-600'>
            Uma forma inovadora de levar o Sistema CNA/Senar/ICNA aos quatro
            cantos do Brasil
          </p>
          <div className='my-8 md:mt-6 flex items-center justify-center gap-x-6 lg:justify-start'>
            <button
              type='button'
              className='rounded-full bg-gradient-to-t  from-secondary to-lime_green hover:from-primary hover:to-primary px-7 py-2 text-lg font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'>
             <a href="#apresentacao">Saiba mais</a> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
