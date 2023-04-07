import React from 'react';
import MenuItem from './MenuItem';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

function Header() {
  return (
    <div className='flex items-center justify-between max-w-6xl py-6 mx-2 sm:mx-auto'>
      <div className='flex'>
        <MenuItem title='Home' address='/' Icon={AiFillHome} />
        <MenuItem title='About' address='/about' Icon={AiFillInfoCircle} />
      </div>
      <div className='flex items-center mx-4 space-x-5 lg:mx-6'>
        <DarkModeSwitch />
        <Link href='/'>
          <h2 className='text-2xl'>
            <span className='px-2 py-1 mr-1 font-bold text-black bg-yellow-400 rounded-md'>
              IMDb
            </span>
            <span className='hidden text-xl sm:inline'>Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
