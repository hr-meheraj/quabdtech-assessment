import axios from 'axios';
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
function SingleShow() {
    const { id } = useParams();
    const { isLoading, data: showDetails, error } = useQuery(["singleShow"], async () => {
        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        return data;
    });

    console.log(showDetails);
    return (
        <div className='mt-[40px] w-[90%] grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[720px] mx-auto mb-[40px]'>
            <div className='  cursor-pointer rounded-[10px] transition-all'>
                <img src={showDetails?.image?.original} className=' max-w-full max-h-[100%] h-[400px] sm:w-full md:h-full rounded-[10px]' alt="Show iamge" />
            </div>

            <div>
                <h2 className='text-2xl'>Show Info : </h2>
                <hr />
                <br />
                <p className=''>Status : {showDetails?.status}</p>
                <p className='mt-3'>Name : <span className='font-bold text-[110%]'>{showDetails?.name}</span></p>
                <div className='details flex gap-2 mt-3'>
                    <span>Genres : </span> <div className='flex gap-2'>{showDetails?.genres?.map((genres, i) => <span className='badge ' key={i}>{genres}</span>)}</div>
                </div>
                <p className='mt-3'>Schedule : {showDetails?.schedule?.days.map(e => e)} at {showDetails?.schedule?.time} (60 min)</p>
                <p className='mt-3'>Rating : ({showDetails?.rating?.average}) {showDetails?.rating?.average > 1 && (<span>{[...Array(Math.round(showDetails?.rating?.average)).keys()]?.map(rating => <span className='mr-1'>⭐</span>)} </span>)}</p>
                <p className='mt-3'>Offical Site : <a href={showDetails?.officialSite} target={"_blank"} className='text-blue-700 cursor-pointer text-[14px]'>{showDetails?.officialSite}</a></p>
                <br/>
                <hr/>
                <div className='mt-4  flex gap-2  flex-wrap'>
                    <p className='font-bold '>Summary : </p> <p className='font-light' dangerouslySetInnerHTML={{__html: showDetails?.summary}}></p>
                </div>
                {/* {showDetails?.summary} */}
            </div>
        </div>
    )
}

export default SingleShow