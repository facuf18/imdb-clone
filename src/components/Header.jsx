import React from 'react';
import MenuItem from './MenuItem';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import Link from 'next/link';

function Header() {
  return (
    <div className='flex items-center justify-between max-w-6xl py-6 mx-2 sm:mx-auto'>
      <div className='flex '>
        <MenuItem title='Home' address='/' Icon={AiFillHome} />
        <MenuItem title='About' address='/about' Icon={AiFillInfoCircle} />
      </div>
      <div className=''>
        <Link href='/'>
          <h2 className='text-2xl'>
            <span className='px-2 py-1 mr-1 font-bold rounded-lg bg-amber-600'>
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
