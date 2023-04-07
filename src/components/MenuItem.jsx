import Link from 'next/link';

function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link
        href={address}
        className='mx-4 lg:mx-6 hover:text-yellow-500 dark:hover:text-yellow-400'
      >
        <Icon className='mx-4 text-2xl sm:hidden' />
        <p className='hidden my-2 text-md sm:inline'>{title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
