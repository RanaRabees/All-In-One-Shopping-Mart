/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <>
            <button><a href="#mynav"><img id="go" className="hover:animate-ping animate-bounce" src="/top.png" alt="" /></a></button>
            <footer className="bg-gray-800 items-center w-full shadow dark:bg-gray-900 ">
                <div className="w-full mx-auto p-4 md:px-6 md:py-4">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link href="/" className="flex items-center mb-4 sm:mb-0">
                            {/* <img src="/navlogo.png" className="lg:h-[90px] md:h-[90px] h-[80px] lg:w-[290px] md:w-[290px] w-[250px]" alt="" /> */}
                            <img src="/navlogo.png" className="lg:h-[90px] md:h-[90px] h-[80px] lg:w-[290px] md:w-[290px] w-[250px] mr-3 transition-all" alt="Logo" />
                            {/* <span className="self-center md:text-2xl lg:text-2xl text-lg font-bold whitespace-nowrap text-white">All In One Shopping Mart</span> */}
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link target="_allinoneshoppingmart" href="https://www.linkedin.com/in/rana-rabees-064830251/" className="mr-4 ml-10 hover:underline md:mr-6 "><img className="rounded-md hover:rounded-xl transition-all h-10 w-10 lg:h-12 lg:w-12 md:h-12 md:w-12 inline-block grayscale hover:grayscale-0" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkdin" /></Link>
                            </li>
                            <li>
                                <Link target="_allinoneshoppingmart" href="https://www.facebook.com/profile.php?id=100088975870807" className="mr-4 hover:underline md:mr-6"><img className="rounded-md hover:rounded-xl transition-all h-10 w-10 lg:h-12 lg:w-12 md:h-12 md:w-12 inline-block grayscale hover:grayscale-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png" alt="Facebook" /></Link>
                            </li>
                            <li>
                                <Link target="_allinoneshoppingmart" href="https://twitter.com/RanaRabees" className="mr-4 hover:underline md:mr-6"><img className="rounded-md hover:rounded-xl transition-all h-10 w-10 lg:h-12 lg:w-12 md:h-12 md:w-12 inline-block grayscale hover:grayscale-0" src="https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk" alt="Twitter" /></Link>
                            </li>
                            <li>
                                <Link target="_allinoneshoppingmart" href="https://github.com/RanaRabees" className="mr-4 hover:underline md:mr-6"><img className="rounded-md hover:rounded-xl transition-all h-10 w-10 lg:h-12 lg:w-12 md:h-12 md:w-12 inline-block grayscale hover:grayscale-0" src="/github.jpeg" alt="Github" /></Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
                    <span className="block text-sm text-gray-500 md:text-center text-center sm:text-center dark:text-gray-400">
                        © <Link href="#" className="hover:text-white text-center">All In One Shopping Mart </Link>.
                        <p className="hover:text-green-500 text-center"> All Rights Reserved. This site is proudly built by </p>
                        <Link href="#" className="hover:text-red-500 text-center"> RanaVerse .</Link></span>


                </div>
            </footer>
        </>
    )
}

export default Footer


// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// const Footer = () => {
//     return (
//         <footer>
//             <div className='footer'>
//                 <div className='logo'>
//                     <Image src="/navlogo.png" width={200} height={50} alt='logo' />
//                     <p>Shop hundreds of products from sellers worldwide... Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum, repudiandae, asperiores aliquid !</p>
//                     <div className='icon-container'>
//                         {/* <div><GrTwitter size={20} /></div>
//                         <div><GrFacebookOption size={20} /></div>
//                         <div><GrLinkedinOption size={20} /></div> */}
//                         <div>
//                             <Link target="_allinoneshoppingmart" href="https://www.linkedin.com/in/rana-rabees-064830251/" className="hover:underline"><img className="rounded-md hover:rounded-xl transition-all h-10 w-10 lg:h-10 lg:w-10 md:h-10 md:w-10 inline-block grayscale hover:grayscale-0" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkdin" /></Link>
//                         </div>
//                         <div>
//                             <Link target="_allinoneshoppingmart" href="https://www.facebook.com/profile.php?id=100088975870807" className="hover:underline"><img className="rounded-md hover:rounded-xl transition-all h-10 w-10 lg:h-10 lg:w-10 md:h-10 md:w-10 inline-block grayscale hover:grayscale-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png" alt="Facebook" /></Link>
//                         </div>
//                         <div>
//                             <Link target="_allinoneshoppingmart" href="https://twitter.com/RanaRabees" className="hover:underline"><img className="rounded-md hover:rounded-xl transition-all h-10 w-10 lg:h-10 lg:w-10 md:h-10 md:w-10 inline-block grayscale hover:grayscale-0" src="https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk" alt="Twitter" /></Link>
//                         </div>
//                         <div>
//                             <Link target="_allinoneshoppingmart" href="https://github.com/RanaRabees" className="hover:underline"><img className="rounded-md hover:rounded-xl transition-all h-10 w-10 lg:h-10 lg:w-10 md:h-10 md:w-10 inline-block grayscale hover:grayscale-0" src="/github.jpeg" alt="Github" /></Link>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='footer-links'>
//                     <h3>Company</h3>
//                     <ul>
//                         <li>About</li>
//                         <li>Terms of Use</li>
//                         <li>Privacy Policy</li>
//                         <li>How it Works</li>
//                         <li>Contact Us</li>
//                     </ul>
//                 </div>

//                 <div className='footer-links'>
//                     <h3>Support</h3>
//                     <ul>
//                         <li>Support Carrer</li>
//                         <li>24h Service</li>
//                         <li>Quick Chat</li>
//                     </ul>
//                 </div>

//                 <div className='footer-links'>
//                     <h3>Contact</h3>
//                     <ul>
//                         <li>Whatsapp</li>
//                         <li>Support 24h</li>
//                     </ul>
//                 </div>
//             </div>

//             <div className='copyright'>
//                 <p>Copyright © 2022 All In One Shopping Mart</p>
//                 <p>Code by. <span>Rabees Hussain</span></p>
//                 <p>Design by. <span>RanaVerse</span></p>
//             </div>
//         </footer>
//     )
// }

// export default Footer