import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { params } from '../hooks/data';

export const Card = () => {

    const [ data ] = useFetch();

    return (
        <div className='p-4 w-full '>
            <div className='flex flex-wrap justify-around'>
                {
                    data.map((item, index) => (
                        <div key={index} className='bg-gray-100 rounded-3xl w-80 h-48 m-2 flex items-center justify-center'>
                            {item.hostname ? (
                                <div className='text-center'>
                                    <p className='text-3xl'>
                                        {
                                            params[index]?.name
                                        }
                                    </p>
                                    <h3 className='bg-green-600 text-white font-semibold w-10/12 px-4 py-2 m-4 rounded-md mx-auto text-center'>{item.message}</h3>
                                    <h3>{item.hostname}</h3>
                                    <h2>{new Date().toLocaleTimeString()}.</h2>
                                </div>
                            ):(
                                <div className='text-center'>
                                    <p className='text-3xl'>
                                        {
                                            params[index]?.name
                                        }
                                    </p>
                                    <h3 className='bg-red-600 text-white font-semibold mx-auto px-4 py-2 m-4 rounded-md text-center'>ERROR</h3>
                                    <p className='text-red-600'>Error 503</p>
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}