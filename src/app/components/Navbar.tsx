/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav id="mynav" className="w-full mynavback">
                <div className="relative flex items-center justify-between h-24">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <div className="container mx-auto flex justify-between items-center">
                            <Link className="text-orange-400 transition-all hover:shadow-red-950 hover:text-orange-500 font-bold hover:font-extrabold hover:italic text-xl hover:text-2xl py-2 px-4" href="#"><p className="inline-block mr-2 ml-[220px] md:ml-0 lg:ml-0"></p></Link>
                        </div>
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700" aria-controls="mobile-menu" aria-expanded={isOpen ? "true" : "false"} onClick={() => setIsOpen(!isOpen)}> {isOpen ? (<XIcon className="block h-8 w-8 rounded-md" aria-hidden="true" />) : (<MenuIcon className="block h-8 w-8 rounded-md" aria-hidden="true" />)} </button>
                    </div>
                    <div className="container mx-auto flex justify-between items-center">
                        <Link className="text-orange-300 transition-all hover:text-orange-600 text-center lg:font-extrabold md:font-extrabold font-bold italic lg:text-2xl md:text-xl text-md" href="/">
                            <img src="/navlogo.png" className="inline-block lg:mr-2 md:mr-2 mr-0.8 ml-0 md:ml-0 lg:ml-0 transition-all lg:h-[90px] md:h-[90px] h-[80px] lg:w-[290px] md:w-[290px] w-[250px]" alt="" />
                            {/* <p className="inline-block lg:mr-2 md:mr-2 mr-0">All In One Shopping Mart</p> */}
                        </Link>
                    </div>
                    <div className="hidden sm:block sm:ml-8">
                        <div className="inline-block space-x-3 md:space-x-5 mdlg:space-x-8 lg:space-x-12">
                            <div className="hidden md:flex md:justify-between md:items-center">
                                <Link className="text-black mr-5 hover:text-purple-600/50 hover:shadow-xl hover:shadow-purple-600/50 transition-all text-xl px-4 py-2 rounded-md focus:outline-none" href="/">Home</Link>
                                <Link className="text-black mr-5 hover:text-purple-600/50 hover:shadow-xl hover:shadow-purple-600/50 transition-all text-xl px-4 py-2 rounded-md focus:outline-none" href="#">Index</Link>
                                <Link className="text-black mr-5 hover:text-purple-600/50 hover:shadow-xl hover:shadow-purple-600/50 transition-all text-xl px-4 py-2 rounded-md focus:outline-none" href="/about">About</Link>
                                <Link className="text-black mr-[150px] hover:text-purple-600/50 hover:shadow-xl hover:shadow-purple-600/50 transition-all text-xl px-4 py-2 rounded-md focus:outline-none" href="/products">Products</Link>
                                <Link className="transition-all ease-in duration-500 hover:bg-gray-300 hover:shadow-2xl border-2 border-gray-900 mr-5 w-auto px-3 py-1 text-center transform rounded-full text-xl" href="/alreadyaccount">Login</Link>
                                <Link className="transition-all ease-in duration-500 text-white  bg-purple-600 hover:bg-purple-400 hover:shadow-2xl border-2 border-gray-900 mr-5 w-36 px-2 py-1 text-center transform rounded-full text-xl" href="/createaccount" target="_blank">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="sm:hidden transition-all text-center" id="mobile-menu">
                        <div className="px-2 pt-2 space-y-5">
                            <div className="md:hidden">
                                <div className="mynavback w-full shadow hover:shadow-2xl hover:shadow-red-950 rounded-md p-4">
                                    <Link className="text-black pr-[102px] pl-[102px] mr-5 text-purple-600/50 shadow-xl shadow-purple-600/50 transition-all text-xl py-2 rounded-md focus:outline-none" href="/">Home</Link><br /><br />
                                    <Link className="text-black pr-[105px] pl-[105px] mr-5 text-purple-600/50 shadow-xl shadow-purple-600/50 transition-all text-xl py-2 rounded-md focus:outline-none" href="#">Index</Link><br /><br />
                                    <Link className="text-black pr-[103px] pl-[103px] mr-5 text-purple-600/50 shadow-xl shadow-purple-600/50 transition-all text-xl py-2 rounded-md focus:outline-none" href="/about">About</Link><br /><br />
                                    <Link className="text-black pr-[91.5px] pl-[91.5px] mr-5 text-purple-600/50 shadow-xl shadow-purple-600/50 transition-all text-xl px-4 py-2 rounded-md focus:outline-none" href="/products">Products</Link><br /><br /><br />
                                    <Link className="transition-all ease-in duration-500 hover:bg-gray-300 hover:shadow-2xl border-2 border-gray-900 mr-5 w-auto px-3 py-1 text-center transform rounded-full text-xl" href="/alreadyaccount">Login</Link>
                                    <Link className="transition-all ease-in duration-500 text-white  bg-purple-600 hover:bg-purple-400 hover:shadow-2xl border-2 border-gray-900 mr-5 w-36 px-2 py-1 text-center transform rounded-full text-xl" href="/createaccount" target="_blank">Get Started</Link><br /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            <hr className="bg-gray-400" />
            {/* <hr className="bg-gray-950" /> */}
        </>
    );
};
export default Navbar;
