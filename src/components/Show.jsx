import React from 'react'
import { Link } from 'react-router-dom';

function Show({show}) {
    console.log();
  return (
    <Link to={`/show/${show?.show?.id}`} className='bg-[#f0f0f0] shadow-md cursor-pointer rounded-[10px] hover:bg-[#141417] hover:text-white transition-all'>
        <img src={show.show.image.medium} className='h-[300px] w-full rounded-t-[10px]' alt="Show iamge"/>
        <div className='p-4'>
            <h2 className='text-2xl hover:text-[#0577b6]'>{show.show?.network?.name || "Unknown"}</h2>
            <div className='flex gap-x-2 gap-y-1 flex-wrap	'>
                {show.show?.genres?.map( ( genres, i) => <span className='badge mt-2' key={i}>{genres}</span>)}
            </div>
        </div>
    </Link>
  ) 
}

export default Show