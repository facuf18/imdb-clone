'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <div>
      <Link
        className={`m-4 hover:text-yellow-50 dark:hover:text-yellow-400 font-semibold p-2 ${
          genre &&
          genre === param &&
          'underline underline-offset-8 decoration-4 decoration-yellow-50 dark:decoration-yellow-400 rounded-lg'
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavbarItem;
