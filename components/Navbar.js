import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsCart4, BsFillBagCheckFill } from 'react-icons/bs';
import { AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle, AiOutlineClear } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { useRouter } from 'next/router';

const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    const [dropdown, setDropdown] = useState(false)
    const [sidebar, setSidebar] = useState(false);
    const [active, setActive] = useState(false);
    const [dropdownToggle, setDropdownToggle] = useState('hidden');
    const [hamburgerButton, setHamburgerButton] = useState(true);

    const router = useRouter()

    useEffect(() => {
        Object.keys(cart).length !== 0 && setSidebar(true)
        let exempted = [`/checkout`, `/order`, `/orders`, `/myaccount`, `/`, `/tshirts`, `/hoodies`, `/mugs`, `/stickers`]
        if (exempted.includes(router.pathname)) {
            setSidebar(false)
        }

        function handleScroll() {
            if (window.scrollY > document.querySelector('nav').offsetHeight + 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const toggleCart = () => {
        setSidebar(!sidebar)
        console.log(sidebar)
    }

    const handleDropDown = () => {
        dropdownToggle === '' ? setDropdownToggle('hidden') : setDropdownToggle('')
        dropdownToggle === '' ? setHamburgerButton(true) : setHamburgerButton(false)
    }

    const ref = useRef()

    return (
        <>
            {!sidebar && <span onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} className='fixed right-14 top-[1.8rem] md:right-20 md:top-[1.6rem] z-30 cursor-pointer'>
                {dropdown && <div className="absolute right-[-1rem] top-3 md:top-[1.2rem] mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:py-5 py-3 z-30" aria-orientation="vertical" >
                    <ul className="py-1">
                        <Link href={'/myaccount'}><li className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" id="menu-item-0">Account</li></Link>
                        <Link href={'/orders'}><li className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" id="menu-item-1">My Orders</li></Link>
                        <li onClick={logout} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" id="menu-item-3">Sign out</li>
                    </ul>
                </div>}
            </span>}


            <nav className={`z-20 ${active ? 'bg-gray-100' : 'bg-gray-100'} shadow-lg sticky top-0 z-10 transition duration-300`}>
                <div className="max-w-[85rem] mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7 justify-between w-[60%]">
                            <div>
                                {/* <!-- Website Logo --> */}
                                <Link href="/" className="flex items-center py-4 px-2">
                                    <span className={`font-bold ${!active ? 'text-black' : 'text-black'} transition duration-300 text-2xl`}>DEVWEAR</span>
                                </Link>
                            </div>
                            {/* <!-- Primary Navbar items --> */}
                            <div className="hidden md:flex items-center space-x-1 ">
                                <Link href="/tshirts" className={`py-4 px-2  ${!active ? 'text-black' : 'text-black'} text-lg font-semibold hover:text-orange-800 transition duration-300 `}>TShirts</Link>
                                <Link href="/hoodies" className={`py-4 px-2  ${!active ? 'text-black' : 'text-black'} text-lg font-semibold hover:text-orange-800 transition duration-300 `}>Hoodies</Link>
                                <Link href="/mugs" className={`py-4 px-2  ${!active ? 'text-black' : 'text-black'} text-lg font-semibold hover:text-orange-800 transition duration-300 `}>Mugs</Link>
                                <Link href="/stickers" className={`py-4 px-2  ${!active ? 'text-black' : 'text-black'} text-lg font-semibold hover:text-orange-800 transition duration-300 `}>Stickers</Link>
                            </div>
                        </div>
                        {/* <!-- Login Button on Large Screen --> */}
                        <div className="hidden md:flex items-center space-x-3 md:mr-8">
                            {!user.value && <Link href={'/login'}><button className="bg-orange-400 text-white px-4 py-2 rounded-full font-bold text-lg focus:outline-none hover:scale-105 active:scale-95 transition duration-300 ease-in-out">Login</button></Link>}

                        </div>
                        {/* <!-- Mobile menu hamburger button --> */}
                        <div className="md:hidden flex items-center">
                            <button className="outline-none mobile-menu-button " onClick={handleDropDown}>
                                {hamburgerButton && <svg className={` w-6 h-6 ${!active ? 'text-black' : 'text-black'} hover:text-green-500 transition duration-300 mt-[0.38rem]`}
                                    x-show="!showMenu"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>}

                                {!hamburgerButton && <svg className="h-6 w-6 mt-[0.38rem]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>}
                            </button>
                        </div>

                        <div className="cursor-pointer cart items-center absolute right-0 top-[1.35rem] mx-5 flex space-x-2 md:space-x-6 h-10">
                            <span onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                                {user.value && <MdAccountCircle className='z-40 bg-transparent text-2xl md:text-3xl absolute right-[6rem] md:right-[7rem]  md:top-[0.09rem] top-[0.1rem]' />}
                            </span>
                            <BsCart4 onClick={toggleCart} className='text-2xl md:text-3xl absolute right-12 top-0 bg-transparent' />
                        </div>


                    </div>
                </div>
                {/* <!-- mobile menu dropdown --> */}
                <div className={`${dropdownToggle} mobile-menu z-10 absolute top-16 backdrop-blur-3xl bg-gray-100 w-screen transition-all lg:hidden rounded-b-3xl overflow-hidden`}>
                    {console.log(dropdownToggle)}
                    <ul className=" flex flex-col items-center pb-5 transition-all">
                        <Link href="/tshirts" className={`py-4 px-2  text-slate-900 text-lg font-semibold hover:text-green-500 transition duration-300 `}>TShirts</Link>
                        <Link href="/hoodies" className={`py-4 px-2  text-slate-900 text-lg font-semibold hover:text-green-500 transition duration-300 `}>Hoodies</Link>
                        <Link href="/mugs" className={`py-4 px-2  text-slate-900 text-lg font-semibold hover:text-green-500 transition duration-300 `}>Mugs</Link>
                        <Link href="/stickers" className={`py-4 px-2  text-slate-900 text-lg font-semibold hover:text-green-500 transition duration-300 `}>Stickers</Link>

                        <li>
                            {!user.value && <Link href={'/login'}><button className="bg-orange-400 text-white px-4 py-2 rounded-full font-bold text-xl focus:outline-none hover:scale-105 active:scale-95 transition duration-300 ease-in-out w-[90vw]">Login</button></Link>}
                        </li>
                    </ul>
                </div>

            </nav >


            {/* SIDE CART */}

            <div ref={ref} className={`sideCart z-20 h-[100vh] w-[21.5rem] absolute overflow-y-scroll top-0 bg-gray-200 p-10 transform transition-transform ${sidebar ? 'right-0' : 'hidden'} shadow-2xl`}>
                <h2 className="font-bold text-xl">Shopping Cart</h2>
                {/* Underline */}
                <div className="w-1/2 h-[1px] bg-black mt-[10px] ml-[8px]">
                </div>

                <span onClick={toggleCart} className="cursor-pointer absolute top-5 right-2  text-2xl text-pink-600">

                    <button type="button" className="bg-red-500 rounded-md p-2 inline-flex items-center justify-center text-gray-100  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300">
                        <svg className="h-4 md:h-6 w-4 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </span>
                <ol className="list-decimal font-semibold">
                    {/* Object.keys(cart) returns an array of all the keys in the cart object. */}

                    {Object.keys(cart).length == 0 && <div className='my-4 font-normal'>Your Cart is Empty</div>}

                    {Object.keys(cart).map((k) => {
                        return <li key={k} className="">
                            <div className='item flex my-5'>
                                <div className="w-2/3 font-semibold">{cart[k].name} ({cart[k].size}/{cart[k].variant})</div>
                                <div className="flex font-semibold justify-center items-center w-1/3 text-lg">
                                    {/* Here k is slug */}

                                    <div className="w-[4.5rem] h-8 bg-gray-200 rounded-3xl flex justify-between ">
                                        <button onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="w-[35%] h-full bg-gray-300 hover:bg-gray-400 rounded-3xl text-center">-</button>

                                        <span className="mt-[0.35rem] text-sm">{cart[k].qty}</span>

                                        <button onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="w-[35%] h-full bg-gray-300 hover:bg-gray-400 rounded-3xl text-center"> + </button>
                                    </div>

                                </div>
                            </div>
                        </li>
                    })}
                </ol>
                <div className="border-t-2 border-black"></div>
                <div className="total bg-gray-300  p-3 rounded-xl my-3">
                    <p className="font-bold">SubTotal: ₹{subTotal}</p>
                </div>
                <div className="flex space-x-3">
                    <Link href={'/checkout'}>
                        <button disabled={Object.keys(cart).length === 0} className=" disabled:bg-gray-300 flex mx-2 text-white bg-gray-800 border-0 py-2 px-[0.7rem] focus:outline-none hover:bg-gray-900 rounded text-sm">
                            <BsFillBagCheckFill className='m-1' />
                            CheckOut</button>
                    </Link>
                    <button disabled={Object.keys(cart).length === 0} onClick={clearCart} className="disabled:bg-gray-300 flex mx-2 text-white bg-gray-800 border-0 py-2 px-[0.7rem] focus:outline-none hover:bg-gray-900 rounded text-sm ">
                        <AiOutlineClear className='m-1' />
                        Clear Cart</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
