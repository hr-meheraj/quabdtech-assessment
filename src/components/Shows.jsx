import { data } from 'autoprefixer';
import axios from 'axios';
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Show from './Show';

export default function Shows() {
    const apiRoute = "https://api.tvmaze.com/search/shows?q=all";
    const { data: shows, isLoading, error } = useQuery(["all-shows"], async () => {
        const { data } = await axios.get(apiRoute);
        return data;
    });

    if (isLoading) {
        return <div className='flex justify-center items-center h-[200px] w-full '>
            <h2 className='btn loading '>Loading...</h2>
        </div>
    }
    return (
        <div className='grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[40px] mb-[100px]'>
            {
                shows?.map(show => <Show show={show} key={show.score} />)
            }
        </div>
    )
}
