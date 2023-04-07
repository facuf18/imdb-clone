'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      {mounted && currentTheme === 'dark' ? (
        <button>
          <MdLightMode
            className='text-xl cursor-pointer hover:text-yellow-400'
            onClick={() => setTheme('light')}
          />
        </button>
      ) : (
        <button>
          <MdDarkMode
            className='text-xl cursor-pointer hover:text-yellow-400'
            onClick={() => setTheme('dark')}
          />
        </button>
      )}
    </>
  );
}

export default DarkModeSwitch;
