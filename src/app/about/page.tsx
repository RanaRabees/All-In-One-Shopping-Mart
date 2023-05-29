/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from 'react';
import { Videolist } from '../components/Videolist';
import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function page() {
    const first = "Rana Rabees"
    const second = "Reebaal Hussain"
    const third = "Amir Hussain"
    const fourth = "Adeema Amir"
    const [index, setIndex] = useState(0);
    let myvideo = Videolist[index];
    return (
        <>
            <Navbar />
            <video controls autoPlay muted className="lg:mt-16 md:mt-16 mt-8 lg:mb-16 md:mb-16 mb-6 lg:h-[600px] md:h-[600px] h-[200px] w-screen rounded-3xl"
                src={myvideo.url}></video>
            <center className="lg:mt-16 md:mt-16 mt-8 lg:mb-16 md:mb-16 mb-6">

                <div id="about" className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-purple-600 text-4xl sm:text-5xl md:text-6xl lg:w-auto text-center xl:text-7xl relative">
                    <p className="text-purple-600 inline-block pr-1">About</p>
                    <span className="text-blue-600 inline-block">Us</span>
                </div>
                <br /> <br />
                <p className="text-center lg:text-xl md:text-xl text-md">
                    <h1 className="text-2xl font-extrabold italic">{first}</h1><br />
                    I am a full stack MERN MEAN REACT Native Windows Mac WEB APP <br />
                    ANDROID IOS Blockchain Metaverse & Games(2D 3D Unity & Core) <br />
                    Developer.<br /><br />
                    <h1 className="text-2xl font-extrabold italic">{second}</h1><br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                    Eligendi sint, laudantium laboriosam, corrupti ipsa quibusdam <br />
                    officia, voluptas quidem odio animi inventore est quam quae velit <br />
                    fugiat cupiditate excepturi odit voluptatibus!<br /><br />
                    <h1 className="text-2xl font-extrabold italic">{third}</h1><br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                    Eligendi sint, laudantium laboriosam, corrupti ipsa quibusdam <br />
                    officia, voluptas quidem odio animi inventore est quam quae velit <br />
                    fugiat cupiditate excepturi odit voluptatibus!<br /><br />
                    <h1 className="text-2xl font-extrabold italic">{fourth}</h1><br />
                    I am a full stack MERN MEAN REACT Native Windows Mac WEB APP <br />
                    ANDROID IOS Blockchain Metaverse & Games(2D 3D Unity & Core) <br />
                    Developer.<br />
                </p>
            </center>
            <Footer />
        </>
    )
}

export default page
