import React from 'react';
import Image from 'next/image';

type Post = {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  url: string;
  category: {
    title: string;
    href: string;
  };
  author: {
    name: string;
    role: string;
    href: string;
    url: string;
  };
};

const posts = [
  {
    id: 1,
    title: 'Feira Agropecuária',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. ',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    url: '/images/carreta-mockup.png',
  },

  {
    id: 2,
    title: 'Feira Agropecuária',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. ',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    url: '/images/carreta-mockup.png',
  },

  {
    id: 3,
    title: 'Feira Agropecuária',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. ',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    url: '/images/carreta-mockup.png',
  },

  {
    id: 4,
    title: 'Feira Agropecuária',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. ',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    url: '/images/carreta-mockup.png',
  },

  // More posts...
];

const Post = () => {
  return (
    <div id='midia' className='py-15 mt-16 md:mt-10'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-headingColor text-4xl md:text-5xl font-bold from-current mb-8 text-center italic'>
          Na mídia
        </h2>
        <div className='mx-auto my-16 max-w-2xl flex flex-col md:flex-row justify-center  gap-x-8 gap-y-16 border-t border-gray-200 mt-4 lg:mx-0 lg:max-w-none'>
          {posts.map((post) => (
            <article
              key={post.id}
              className='flex max-w-xl flex-col items-start justify-between m-auto'>
              <div className='max-w-lg bg-white border flex-1 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <a href='#'>
                  <div>
                    <Image
                      src={post.url}
                      alt=''
                      width={800}
                      height={500}
                      quality={90}
                      style={{
                        position: 'relative',
                        width: '100%',
                      }}
                    />
                  </div>
                </a>
                <div className='p-5'>
                  <a href='#'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white'>
                      {post.title}
                    </h5>
                  </a>
                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
    <div className="flex justify-center">
    <button className=' text-center my-2 mx-auto text-md text-slate-600 hover:opacity-80 bg-yellow-300 py-2 px-4 rounded-md font-medium'>
          Mais antigas
        </button>
    </div>
      </div>
    </div>
  );
};

export default Post;
