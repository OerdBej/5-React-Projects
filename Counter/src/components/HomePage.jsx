import React from 'react';

const HomePage = () => {
  return (
    <div>
      <nav className='w-full bg-gray-800 text-white p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-xl font-bold'>slowcoding</div>
          <div className='space-x-4'>
            <a href='#home' className='hover:text-gray-300'>
              Home
            </a>
            <a href='#about' className='hover:text-gray-300'>
              About
            </a>
            <a href='#blog' className='hover:text-gray-300'>
              Blog
            </a>
            <a href='#contact' className='hover:text-gray-300'>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
