/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from 'react';
import { Imglist } from './Imglist';


export default function Slider() {
    const [index, setIndex] = useState(0);
    const hasNext = index < Imglist.length - 1;
    // const hasPrev = index < Imglist.length - 1;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleBackClick() {
        if (hasNext) {
            setIndex(index - 1);
        } else {
            setIndex(0);
        }
    }
    let sculpture = Imglist[index];
    return (
        <>
            <center className=''>
                <br />
                <img
                    onClick={handleNextClick}
                    className='hover:cursor-pointer lg:h-[600px] md:h-[600px] h-[300px] w-screen rounded-3xl'
                    src={sculpture.url}
                    alt={sculpture.alt}
                />
                <br /><br />
                <div className='flex'>
                    <button onClick={handleNextClick} className="rounded-xl hover:rounded-3xl transition-all hover:shadow-2xl hover:shadow-blue-600/50 block text-lg mx-auto text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 focus:shadow-outline focus:outline-none text-white py-3 px-10">Next</button>
                    <h3 className='text-xl'>({index + 1} of {Imglist.length})</h3>
                    <button onClick={handleBackClick} className="rounded-xl hover:rounded-3xl transition-all hover:shadow-2xl hover:shadow-blue-600/50 block text-lg mx-auto text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 focus:shadow-outline focus:outline-none text-white py-3 px-10">Prev</button>
                </div>
            </center>
        </>
    );
}


