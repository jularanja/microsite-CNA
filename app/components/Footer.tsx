import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className='max-w-container flex justify-center mt-10 py-10 sm:py-15 bg-blue-500'>
        <div className='flex justify-between'>
          <div className='flex justify-between items-center w-full'>
            <Link href='/'>
             <h2>Footer</h2>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
