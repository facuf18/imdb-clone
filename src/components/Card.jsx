import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

function Card({ result }) {
  return (
    <div className='m-2 transition-shadow duration-200 rounded-lg cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-sm sm:border sm:border-slate-400 group'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className='transition-opacity duration-200 sm:rounded-t-lg group-hover:opacity-80'
          placeholder='blur'
          blurDataURL='/spinner.svg'
          alt='image is not available'
          style={{
            maxWidth: '100%',
            maxHeight: 'auto',
          }}
        ></Image>
        <div className='p-2'>
          <p className='line-clamp-3 text-md'>{result.overview}</p>
          <h1 className='text-lg font-bold truncate'>
            {result.title || result.name}
          </h1>
          <p className='flex items-center '>
            {result.release_date || result.first_air_date}
            <FiThumbsUp className='h-5 ml-3 mr-1' /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
