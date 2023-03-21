'use client';

import { ThemeProvider } from 'next-themes';

function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='min-h-screen text-gray-700 transition-colors select-none duration-600 dark:bg-gray-800 dark:text-gray-200'>
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Providers;
