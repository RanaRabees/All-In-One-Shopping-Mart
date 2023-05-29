/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'


function Subscribe() {
    return (
        <>
            <div className="flex flex-col max-w-full mb-14 md:h-56 overflow-hidden md:flex-row">
                <div className="md:flex lg:ml-28 md:ml-28 ml-0 items-center rounded-full text-center justify-center md:w-1/2 md:bg-gray-700">
                    <div className="py-6 px-8 md:py-0">
                        <h2 className="text-gray-700 text-2xl font-bold md:text-gray-100">Subscribe Us For New Products</h2>
                        <p className="mt-2 text-gray-600 md:text-gray-400">Get the latest information and promo offers directly. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo accusantium nostrum qui animi a.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                    <form>
                        <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                            <input className="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100" type="text" name="email" placeholder="Enter your email" />
                            <button className="py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600">
                                <Link href="mailto:rrabeeshussain@gmail.com">Subscribe</Link></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Subscribe


