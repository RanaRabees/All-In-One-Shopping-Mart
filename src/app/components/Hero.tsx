/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <>
            <div className="lg:mb-[300px] md:mb-[300px] mb-[20px] pt-10 lg:pt-20 dark:bg-gray-900">
                <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
                    <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-purple-600 text-4xl
                    text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl">Welcome To <br className="lg:block hidden" />
                    </h1>
                    <div className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-purple-600 text-4xl
                    text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl">
                        <span className="relative text-blue-600 inline-block">All In One Shopping
                            <p className="text-purple-600 inline-block pl-4">Mart</p>
                        </span>
                    </div>
                    <div className="lg:flex">
                        <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                            <p className="mb-14 sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                                Lorem Ipsum
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                                There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
                            </p>
                            <span className="text-2xl hover:italic transition-all font-semibold text-gray-500 dark:text-gray-400">Online shopping made easy</span>
                            <p className="sm:text-lg mt-3 text-gray-700 dark:text-gray-300 lg:w-11/12">
                                Lorem Ipsum quisquam est qui dolorem ipsum Lorem Ipsum dolor <br />
                                quia dolor sit amet, consecteturer, adipisci velit Lorem Ipsum ica <br />
                                There is no one who loves pain itself Lorem Ipsum dolorem ipsum.<br />
                            </p>
                            <div className="pt-8 grid grid-cols-3 lg:space-x-14 md:space-x-14 space-x-14 md:flex md:justify-center lg:justify-start">
                                <Link aria-label="Get Started" href="/createaccount" className="w-[150px] md:w-auto lg:w-auto p-4 border border-gray-300 rounded-full duration-300 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/50 transition-all">
                                    <div className="flex">
                                        <img className="w-6 h-6 lg:pr-1 md:pr-1 pr-0" src="https://cdn2.iconfinder.com/data/icons/blue-sapphire-shopping/256/36-512.png" alt="Get Started" loading="lazy" width="130" height="128" />
                                        <span className="font-medium md:block">View_Products</span>
                                    </div>
                                </Link>
                                <Link aria-label="Shop Now" href="/products" className="w-[130px] md:w-auto lg:w-auto p-4 border border-gray-300 rounded-full duration-300 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/50 transition-all">
                                    <div className="flex">
                                        <img className="w-6 h-6 lg:pr-1 md:pr-1 pr-0" src="https://st2.depositphotos.com/1688079/5651/i/600/depositphotos_56510803-stock-photo-shop-now-basket-icon.jpg" alt="Shop Now" loading="lazy" width="130" height="128" />
                                        <span className="font-medium md:block">Shop_Now</span>
                                    </div>
                                </Link>
                            </div>
                            {/* <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                                <Link aria-label="Add To Discord" href="https://discord.gg/dQbc6ySy" className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                                    <div className="flex justify-center space-x-4">
                                        <img className="w-6 h-6" src="/discord.png" alt="Discord logo" loading="lazy" width="128" height="128" />
                                        <span className="hidden font-medium md:block dark:text-white">Discord</span>
                                    </div>
                                </Link>
                                <Link aria-label="Add To Slack" href="https://join.slack.com/t/ranaverse-group/shared_invite/zt-1uwwjo8hx-ZtEmogUbZbRTBNiPTN3BHg" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                                    <div className="flex justify-center space-x-4">
                                        <img className="w-6 h-6" src="https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png" alt="slack logo" loading="lazy" width="128" height="128" />
                                        <span className="hidden font-medium md:block dark:text-white">Slack</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="pt-10 flex gap-1 justify-between lg:w-2/3">
                                <Link href="https://www.linkedin.com/in/rana-rabees-064830251/" target="_allinoneshoppingmart"> <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="h-8 sm:h-10 w-auto lg:h-12 rounded-md hover:rounded-xl hover:animate-bounce  transition-all shadow-xl shadow-blue-400 border-2 border-blue-400  grayscale hover:grayscale-0" alt="" /></Link>
                                <Link href="https://www.facebook.com/profile.php?id=100088975870807" target="_allinoneshoppingmart"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png" className=" hover:animate-bounce h-8 sm:h-10 w-auto lg:h-12 rounded-md hover:rounded-xl transition-all shadow-xl shadow-blue-400 border-2 border-blue-400  grayscale hover:grayscale-0" alt="" /></Link>
                                <Link href="https://twitter.com/RanaRabees" target="_allinoneshoppingmart"> <img src="https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk" className="h-8 sm:h-10 w-auto lg:h-12 rounded-md hover:animate-bounce  hover:rounded-xl transition-all shadow-xl shadow-blue-400 border-2 border-blue-400  grayscale hover:grayscale-0" alt="" /></Link>
                            </div> */}
                        </div>
                        <div className="mt-12 md:mt-0 lg:absolute right-0 lg:w-7/12">
                            <div className="relative w-full">
                                <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-pink-300 blur-3xl shadow-xl shadow-red-400"></div>
                                <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg" className="hover:animate-spin-slow relative w-full" alt="Hero Img" loading="lazy" width="320" height="280" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
