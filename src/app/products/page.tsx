/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

function page() {
    return (
        <>
            <Navbar />
            <div className="pt-10 flex flex-col items-center sm:px-5 md:flex-row">
                <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
                    <div className="pl-3 flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
                        <div className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-purple-600 text-4xl
                    text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl relative">
                            <p className="text-purple-600 inline-block pr-1">Sell</p>
                            <span className="text-blue-600 inline-block">Online With Ease</span>
                        </div>
                        <div className="pt-2 pr-0 pb-0 pl-0">
                            <p className="lg:text-xl lg:text-left md:text-left text-center md:text-xl text-sm font-medium inline">Access our global marketplace and sell your products to over 1 million visitors.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:pr-3 md:pr-3 pr-0">
                    <div className="block">
                        <img alt=""
                            src="https://cdn.pixabay.com/photo/2017/08/07/17/10/shopping-mall-2605815_640.jpg" className="object-cover shadow-xl shadow-gray-400 rounded-3xl max-h-64 sm:max-h-96 lg:mb-0 md:mb-0 mb-20 btn- w-full h-full" />
                    </div>
                </div>
            </div>
            <div id="products" className="lg:p-7 md:p-7 p-2 lg:mt-32 md:mt-32 mt-5 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-3">
                <section className="group card p-3 bg-white rounded-lg shadow-2xl">
                    <div className="prod-title">
                        <p className="text-2xl text-gray-900 font-bold">Office chair</p>
                        <p className="font-bold mb-3 text-xl text-gray-400">30 $</p>
                    </div>
                    <div className="prod-img aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                        <Link target="_allinoneshoppingmart" href="/chair.jpeg">
                            <img src="/chair.jpeg"
                                alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group bg-white rounded-lg shadow-2xl-hover:opacity-75" /></Link>
                    </div>
                    <div>
                        <Link target='_blank' href="/chair.jpeg" className="inline-block transition-colors ease-in duration-300 hover:bg-gray-800 hover:text-white border-2 border-gray-900 mt-5 mr-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px]">
                            Quick View
                        </Link>
                        <Link target='_blank' href="" className="inline-block transition-colors ease-in duration-300 hover:bg-[#cab29f] bg-[#F2ECE7] border-2 border-gray-900 mb-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px]">
                            Add to Cart
                        </Link>
                    </div>
                </section>
                <section className="group card p-3 bg-white rounded-lg shadow-2xl">
                    <div className="prod-title">
                        <p className="text-2xl text-gray-900 font-bold">Chess</p>
                        <p className="font-bold mb-3 text-xl text-gray-400">24.95 $</p>
                    </div>
                    <div className="prod-img aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                        <Link target="_allinoneshoppingmart" href="/chess.jpeg">
                            <img src="/chess.jpeg"
                                alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group bg-white rounded-lg shadow-2xl-hover:opacity-75" /></Link>
                    </div>
                    <div>
                        <Link target='_blank' href="/chess.jpeg" className="inline-block transition-colors ease-in duration-300 hover:bg-gray-800 hover:text-white border-2 border-gray-900 mt-5 mr-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px] focus:outline-none">
                            Quick View
                        </Link>
                        <Link target='_blank' href="" className="inline-block transition-colors ease-in duration-300 hover:bg-[#cab29f] bg-[#F2ECE7] border-2 border-gray-900 mb-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px]">
                            Add to Cart
                        </Link>
                    </div>
                </section>
                <section className="group card p-3 bg-white rounded-lg shadow-2xl">
                    <div className="prod-title">
                        <p className="text-2xl text-gray-900 font-bold">Tennis</p>
                        <p className="font-bold mb-3 text-xl text-gray-400">149.95ٖ $</p>
                    </div>
                    <div className="prod-img aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                        <Link target="_allinoneshoppingmart" href="/tennis.jpeg">
                            <img src="/tennis.jpeg"
                                alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group bg-white rounded-lg shadow-2xl-hover:opacity-75" /></Link>
                    </div>
                    <div>
                        <Link target='_blank' href="/tennis.jpeg" className="inline-block transition-colors ease-in duration-300 hover:bg-gray-800 hover:text-white border-2 border-gray-900 mt-5 mr-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px] focus:outline-none">
                            Quick View
                        </Link>
                        <Link target='_blank' href="" className="inline-block transition-colors ease-in duration-300 hover:bg-[#cab29f] bg-[#F2ECE7] border-2 border-gray-900 mb-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px]">
                            Add to Cart
                        </Link>
                    </div>
                </section>
                <section className="group card p-3 bg-white rounded-lg shadow-2xl">
                    <div className="prod-title">
                        <p className="text-2xl text-gray-900 font-bold">Shoes</p>
                        <p className="font-bold mb-3 text-xl text-gray-400">235ٖ $</p>
                    </div>
                    <div className="prod-img aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                        <Link target="_allinoneshoppingmart" href="/newshoes.jpeg">
                            <img src="/newshoes.jpeg"
                                alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group bg-white rounded-lg shadow-2xl-hover:opacity-75" /></Link>
                    </div>
                    <div>
                        <Link target='_blank' href="/newshoes.jpeg" className="inline-block transition-colors ease-in duration-300 hover:bg-gray-800 hover:text-white border-2 border-gray-900 mt-5 mr-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px] focus:outline-none">
                            Quick View
                        </Link>
                        <Link target='_blank' href="" className="inline-block transition-colors ease-in duration-300 hover:bg-[#cab29f] bg-[#F2ECE7] border-2 border-gray-900 mb-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px]">
                            Add to Cart
                        </Link>
                    </div>
                </section>
            </div>
            <div className="lg:p-7 md:p-7 p-2 lg:mt-20 md:mt-20 mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-3">
                <section className="group card p-3 bg-white rounded-lg shadow-2xl">
                    <div className="prod-title">
                        <p className="text-2xl text-gray-900 font-bold">Mouses</p>
                        <p className="font-bold mb-3 text-xl text-gray-400">149.95 $</p>
                    </div>
                    <div className="prod-img aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                        <Link target="_allinoneshoppingmart" href="/mouse.jpeg">
                            <img src="/mouse.jpeg"
                                alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group bg-white rounded-lg shadow-2xl-hover:opacity-75" /></Link>
                    </div>
                    <div className="">
                        <div>
                            <Link target='_blank' href="/mouse.jpeg" className="inline-block transition-colors ease-in duration-300 hover:bg-gray-800 hover:text-white border-2 border-gray-900 mt-5 mr-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px] focus:outline-none">
                                Quick View
                            </Link>
                            <Link target='_blank' href="" className="inline-block transition-colors ease-in duration-300 hover:bg-[#cab29f] bg-[#F2ECE7] border-2 border-gray-900 mb-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px]">
                                Add to Cart
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="group card p-3 bg-white rounded-lg shadow-2xl">
                    <div className="prod-title">
                        <p className="text-2xl text-gray-900 font-bold">Keyboards</p>
                        <p className="font-bold mb-3 text-xl text-gray-400">15 $</p>
                    </div>
                    <div className="prod-img aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                        <Link target="_allinoneshoppingmart" href="/keyboard.jpeg">
                            <img src="/keyboard.jpeg"
                                alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group bg-white rounded-lg shadow-2xl-hover:opacity-75" /></Link>
                    </div>
                    <div>
                        <Link target='_blank' href="/chair.jpeg" className="inline-block transition-colors ease-in duration-300 hover:bg-gray-800 hover:text-white border-2 border-gray-900 mt-5 mr-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px] focus:outline-none">
                            Quick View
                        </Link>
                        <Link target='_blank' href="" className="inline-block transition-colors ease-in duration-300 hover:bg-[#cab29f] bg-[#F2ECE7] border-2 border-gray-900 mb-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px]">
                            Add to Cart
                        </Link>
                    </div>
                </section>
                <section className="group card p-3 bg-white rounded-lg shadow-2xl">
                    <div className="prod-title">
                        <p className="text-2xl text-gray-900 font-bold">Laptops</p>
                        <p className="font-bold mb-3 text-xl text-gray-400">200.20 $</p>
                    </div>
                    <div className="prod-img aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                        <Link target="_allinoneshoppingmart" href="/laptop.jpeg">
                            <img src="/laptop.jpeg"
                                alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group bg-white rounded-lg shadow-2xl-hover:opacity-75" /></Link>
                    </div>
                    <div>
                        <Link target='_blank' href="/chair.jpeg" className="inline-block transition-colors ease-in duration-300 hover:bg-gray-800 hover:text-white border-2 border-gray-900 mt-5 mr-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px] focus:outline-none">
                            Quick View
                        </Link>
                        <Link target='_blank' href="" className="inline-block transition-colors ease-in duration-300 hover:bg-[#cab29f] bg-[#F2ECE7] border-2 border-gray-900 mb-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px]">
                            Add to Cart
                        </Link>
                    </div>
                </section>
                <section className="group card p-3 bg-white rounded-lg shadow-2xl">
                    <div className="prod-title">
                        <p className="text-2xl text-gray-900 font-bold">Full Furniture Set</p>
                        <p className="font-bold mb-3 text-xl text-gray-400">150.50 $</p>
                    </div>
                    <div className="prod-img aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                        <Link target="_allinoneshoppingmart" href="/room.jpeg">
                            <img src="/room.jpeg"
                                alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group bg-white rounded-lg shadow-2xl-hover:opacity-75" /></Link>
                    </div>
                    <div>
                        <Link target='_blank' href="/room.jpeg" className="inline-block transition-colors ease-in duration-300 hover:bg-gray-800 hover:text-white border-2 border-gray-900 mt-5 mr-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px] focus:outline-none">
                            Quick View
                        </Link>
                        <Link target='_blank' href="" className="inline-block transition-colors ease-in duration-300 hover:bg-[#cab29f] bg-[#F2ECE7] border-2 border-gray-900 mb-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px]">
                            Add to Cart
                        </Link>
                    </div>
                </section>
            </div>
            <div className="lg:p-7 md:p-7 p-2 lg:mt-20 md:mt-20 mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-3">
                <section className="group card p-3 bg-white rounded-lg shadow-2xl">
                    <div className="prod-title">
                        <p className="text-2xl text-gray-900 font-bold">Watch</p>
                        <p className="font-bold mb-3 text-xl text-gray-400">49.20 $</p>
                    </div>
                    <div className="prod-img aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                        <Link target="_allinoneshoppingmart" href="/watch.jpg">
                            <img src="/watch.jpg"
                                alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group bg-white rounded-lg shadow-2xl-hover:opacity-75" /></Link>
                    </div>
                    <div className="">
                        <div>
                            <Link target='_blank' href="/mouse.jpeg" className="inline-block transition-colors ease-in duration-300 hover:bg-gray-800 hover:text-white border-2 border-gray-900 mt-5 mr-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px] focus:outline-none">
                                Quick View
                            </Link>
                            <Link target='_blank' href="" className="inline-block transition-colors ease-in duration-300 hover:bg-[#cab29f] bg-[#F2ECE7] border-2 border-gray-900 mb-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px]">
                                Add to Cart
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="group card p-3 bg-white rounded-lg shadow-2xl">
                    <div className="prod-title">
                        <p className="text-2xl text-gray-900 font-bold">Perfumes</p>
                        <p className="font-bold mb-3 text-xl text-gray-400">35 $</p>
                    </div>
                    <div className="prod-img aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                        <Link target="_allinoneshoppingmart" href="/perfume.jpg">
                            <img src="/perfume.jpg"
                                alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group bg-white rounded-lg shadow-2xl-hover:opacity-75" /></Link>
                    </div>
                    <div>
                        <Link target='_blank' href="/chair.jpeg" className="inline-block transition-colors ease-in duration-300 hover:bg-gray-800 hover:text-white border-2 border-gray-900 mt-5 mr-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px] focus:outline-none">
                            Quick View
                        </Link>
                        <Link target='_blank' href="" className="inline-block transition-colors ease-in duration-300 hover:bg-[#cab29f] bg-[#F2ECE7] border-2 border-gray-900 mb-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px]">
                            Add to Cart
                        </Link>
                    </div>
                </section>
                <section className="group card p-3 bg-white rounded-lg shadow-2xl">
                    <div className="prod-title">
                        <p className="text-2xl text-gray-900 font-bold">Bags</p>
                        <p className="font-bold mb-3 text-xl text-gray-400">150.15 $</p>
                    </div>
                    <div className="prod-img aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                        <Link target="_allinoneshoppingmart" href="/bag.jpg">
                            <img src="/bag.jpg"
                                alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group bg-white rounded-lg shadow-2xl-hover:opacity-75" /></Link>
                    </div>
                    <div>
                        <Link target='_blank' href="/chair.jpeg" className="inline-block transition-colors ease-in duration-300 hover:bg-gray-800 hover:text-white border-2 border-gray-900 mt-5 mr-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px] focus:outline-none">
                            Quick View
                        </Link>
                        <Link target='_blank' href="" className="inline-block transition-colors ease-in duration-300 hover:bg-[#cab29f] bg-[#F2ECE7] border-2 border-gray-900 mb-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px]">
                            Add to Cart
                        </Link>
                    </div>
                </section>
                <section className="group card p-3 bg-white rounded-lg shadow-2xl">
                    <div className="prod-title">
                        <p className="text-2xl text-gray-900 font-bold">Mobiles</p>
                        <p className="font-bold mb-3 text-xl text-gray-400">80 $</p>
                    </div>
                    <div className="prod-img aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                        <Link target="_allinoneshoppingmart" href="/mobile.jpg">
                            <img src="/mobile.jpg"
                                alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group bg-white rounded-lg shadow-2xl-hover:opacity-75" /></Link>
                    </div>
                    <div>
                        <Link target='_blank' href="/room.jpeg" className="inline-block transition-colors ease-in duration-300 hover:bg-gray-800 hover:text-white border-2 border-gray-900 mt-5 mr-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px] focus:outline-none">
                            Quick View
                        </Link>
                        <Link target='_blank' href="" className="inline-block transition-colors ease-in duration-300 hover:bg-[#cab29f] bg-[#F2ECE7] border-2 border-gray-900 mb-5 w-auto px-4 py-3 font-medium text-center transform rounded-[14px] hover:rounded-[20px]">
                            Add to Cart
                        </Link>
                    </div>
                </section>
            </div>
            <div className="flex flex-col items-center lg:mt-20 md:mt-20 mt-10 lg:mb-14 md:mb-14 mb-5 justify-center">
                <ul className="flex pl-0 list-none rounded my-2">
                    <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200"><Link className="page-link" href="#">Previous</Link></li>
                    <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><Link className="page-link" href="#">1</Link></li>
                    <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><Link className="page-link" href="#">2</Link></li>
                    <p className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200">...</p>
                    <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><Link className="page-link" href="#">7</Link></li>
                    <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><Link className="page-link" href="#">8</Link></li>
                    <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200"><Link className="page-link" href="#">Next</Link></li>
                </ul>
            </div>
            <Footer />
        </>
    )
}

export default page
