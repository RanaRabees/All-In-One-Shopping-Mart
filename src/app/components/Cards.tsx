/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

function Cards() {
    return (
        <>
            <div>
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="font-bold tracking-tight text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:w-auto xl:text-7xl">Online shopping made easy</h2>
                    <p className="mt-2 lg:text-2xl md:text-2xl text-xl leading-8 text-gray-600">Shop hundreds of products from sellers worldwide...</p>
                </div>
                {/* <div className="w-full mt-16">
                    <div className="flex flex-wrap lg:pl-7 md:pl-7 pl-0 lg:pr-5 md:pr-5 pr-0">
                        <div className="goomdiva lg:w-60 md:w-60 w-full hover:scale-125 transition-all shadow-lg shadow-gray-500 hover:shadow-2xl hover:shadow-gray-500 h-[300px] bg-green-500 rounded-xl"></div>
                        <div className="goomdivb lg:w-60 md:w-60 w-full hover:scale-125 transition-all shadow-lg shadow-gray-500 hover:shadow-2xl hover:shadow-gray-500 h-[300px] bg-orange-500 rounded-xl"></div>
                        <div className="goomdivc lg:w-60 md:w-60 w-full hover:scale-125 transition-all shadow-lg shadow-gray-500 hover:shadow-2xl hover:shadow-gray-500 h-[300px] bg-purple-500 rounded-xl"></div>
                        <div className="goomdivd lg:w-60 md:w-60 w-full hover:scale-125 transition-all shadow-lg shadow-gray-500 hover:shadow-2xl hover:shadow-gray-500 h-[300px] bg-blue-500 rounded-xl"></div>
                        <div className="goomdive lg:w-60 md:w-60 w-full hover:scale-125 transition-all shadow-lg shadow-gray-500 hover:shadow-2xl hover:shadow-gray-500 h-[300px] bg-pink-500 rounded-xl"></div>
                    </div>
                </div> */}
                <div className="text-center mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
                        <section className="group text-center">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <Link target="_allinoneshoppingmart" href="/chess.jpeg">
                                    <img src="/chess.jpeg" alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group text-center-hover:opacity-75" /></Link>
                            </div>
                            <p className="mt-1 text-lg font-medium text-gray-900">Chess</p>
                            <div className="grid-uniform"><Link className="btn" href="/">$24.95</Link></div>
                        </section>
                        <section className="group text-center">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <Link target="_allinoneshoppingmart" href="/tennis.jpeg">
                                    <img src="/tennis.jpeg" alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group text-center-hover:opacity-75" /></Link>
                            </div>
                            <p className="mt-1 text-lg font-medium text-gray-900">Tennis</p>
                            <div className="grid-uniform"><Link className="btn" href="/">$100.95</Link></div>
                        </section>
                        <section className="group text-center">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <Link target="_allinoneshoppingmart" href="/newshoes.jpeg">
                                    <img src="/newshoes.jpeg" alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group text-center-hover:opacity-75" /></Link>
                            </div>
                            <p className="mt-1 text-lg font-medium text-gray-900">Shoes</p>
                            <div className="grid-uniform"><Link className="btn" href="/">$150.29</Link></div>
                        </section>
                        <section className="group text-center">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <Link target="_allinoneshoppingmart" href="/chair.jpeg">
                                    <img src="/chair.jpeg" alt="" className="h-full w-full contrast-50 hover:contrast-100 object-cover object-center group text-center-hover:opacity-75" /></Link>
                            </div>
                            <p className="mt-1 text-lg font-medium text-gray-900">Office chair</p>
                            <div className="grid-uniform"><Link className="btn" href="/">$235</Link></div>
                        </section>
                    </div>
                    <div className="flex flex-col rounded-xls-center justify-center">
                        <br /><button className="rounded-xl hover:rounded-3xl transition-all hover:shadow-2xl hover:shadow-blue-600/50 block text-lg mx-auto text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 focus:shadow-outline focus:outline-none text-white py-3 px-10"><Link href="/products#products">View All Products</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
