'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center justify-between max-w-xl px-5 mx-auto'
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='Search keywords...'
        className='flex-1 w-full placeholder-gray-500 bg-transparent rounded-sm outline-none h-14'
      />
      <button
        disabled={!search}
        type='submit'
        className='text-yellow-400 disabled:text-gray-400 '
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
