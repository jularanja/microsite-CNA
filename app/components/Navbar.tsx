'use client';
import Link from 'next/link';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navigation = [
  { name: 'Apresentação', href: '#apresentacao' },
  { name: 'Cronograma Anual', href: '#cronograma' },
  { name: 'Na mídia', href: '#midia' },
  { name: 'Fale conosco', href: '#contato' },
];

for (let i = 0; i < navigation.length; i++) {
  const hrefText = navigation[i].href;
  console.log(hrefText);
}

export default function Navbar() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=''>
      <header className='absolute inset-x-0 top-0 z-50 bg-white'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8 mx-auto max-w-7xl '
          aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a
              href='#'
              className='-m-1.5 p-1.5'>
              <span className='sr-only'>Agro pelo Brasil</span>
              <Image
                className='h-16 sm:h-24 w-auto'
                src='images/logo-cna-senar-icna.svg'
                alt='logo-cna-senar-icna'
                width={300}
                height={70}
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}>
              <span className='sr-only'>Abrir menu principal</span>
              <Bars3Icon
                className='h-6 w-6'
                aria-hidden='true'
              />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className=' text-base xl:text-lg font-bold leading-6 text-gray-700 hover:bg-light_green active:bg-primary'>
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a
                href='#'
                className='-m-1.5 p-1.5'>
                <span className='sr-only'>Agro pelo Brasil</span>
                <Image
                  className='h-10 w-auto'
                  src='images/logo-cna-senar-icna.svg'
                  alt='logo-cna-senar-icna'
                  width={300}
                  height={70}
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}>
                <span className='sr-only'>Close menu</span>
                <XMarkIcon
                  className='h-6 w-6'
                  aria-hidden='true'
                />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      onClick={() => setMobileMenuOpen(false)}>
                      <a
                        key={item.name}
                        href={item.href}>
                        {item.name}
                      </a>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
