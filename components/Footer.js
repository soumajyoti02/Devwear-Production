import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 mt-8 pb-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ml-0 md:ml-20 md:pt-16">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <Link href={`/`} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img src="/logo.png" alt="logo" className='w-[200px] h-[40px]' />
                        </Link>
                        <p className="mt-2 md:ml-5 text-sm text-gray-500">Styled in &lt;Code/&gt;</p>
                        <p className="mt-2 md:ml-5 text-sm text-gray-500">Premium Coding T-Shirts, Hoodies and Apparals</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 justify-evenly">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SHOP</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={'/tshirts'} className="text-gray-600 hover:text-gray-800">TShirts</Link>
                                </li>
                                <li>
                                    <Link href={'/hoodies'} className="text-gray-600 hover:text-gray-800">Hoodies</Link>
                                </li>
                                <li>
                                    <Link href={'/stickers'} className="text-gray-600 hover:text-gray-800">Stickers</Link>
                                </li>
                                <li>
                                    <Link href={'/mugs'} className="text-gray-600 hover:text-gray-800">Mugs</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">BRANDS</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a href='https://fila.co.in/' className="text-gray-600 hover:text-gray-800">FILA</a>
                                </li>
                                <li>
                                    <a href='https://www.levi.in/' className="text-gray-600 hover:text-gray-800">LEVI</a>
                                </li>
                                <li>
                                    <a href='https://www.adidas.co.in/' className="text-gray-600 hover:text-gray-800">ADIDAS</a>
                                </li>
                                <li>
                                    <a href='https://in.puma.com/in/en' className="text-gray-600 hover:text-gray-800">PUMA</a>
                                </li>
                            </nav>
                        </div>


                        <div className="lg:w-[32%] md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div className="relative w-72  sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <label for="footer-field" className="leading-7 text-sm text-gray-600">Enter Your Email</label>
                                    <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
                                </div>
                                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded mt-3 mr-2">Subscribe Now</button>
                            </div>
                            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Join the thousands of satisfied customers who have already taken this step
                            </p>
                        </div>


                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 DEVWEAR —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@devwear.com</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a href='https://www.facebook.com/soumajy' className="text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a href='https://twitter.com/soumajyoti02' className="ml-3 text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a href='https://www.instagram.com/focus_devoted/' className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a href='https://www.linkedin.com/in/soumajyoti-sarkar-6a88a2166/' className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
