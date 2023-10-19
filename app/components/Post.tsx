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
    url: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
    url: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
    url: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
    url: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },

  // More posts...
];

const Post = () => {
  return (
    <div id='midia' className='py-15 mt-10'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-headingColor text-5xl font-bold from-current mb-8 text-center italic'>
          Na mídia
        </h2>
        <div className='mx-auto my-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 mt-4 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
          {posts.map((post) => (
            <article
              key={post.id}
              className='flex max-w-xl flex-col items-start justify-between'>
              <div className='max-w-lg bg-white border flex-1 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <a href='#'>
                  <div>
                  <Image 
                          src={'/images/placeholder.jpg'} 
                          alt=''
                          width={'100'}
                          height={'100'}
                          style={{
                            position: 'relative', 
                            width: '100%'
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
        <button
          className='mt-12 text-center bg-yellow-300 py-2 rounded-lg'
          style={{ display: 'block', margin: '0 auto', width: '150px' }}>
          Mais notícias
        </button>
      </div>
    </div>
  );
};

export default Post;
