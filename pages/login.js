import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Router, useRouter } from 'next/router';
import Head from 'next/head';

const Login = () => {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (event) => {
        if (event.target.name === 'email') {
            setEmail(event.target.value)
        }
        if (event.target.name === 'password') {
            setPassword(event.target.value)
        }

    }

    useEffect(() => {
        if (localStorage.getItem('myuser')) {
            router.push('/')
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = { email, password }

        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        let response = await res.json()

        setEmail('')
        setPassword('')
        if (response.success) {
            localStorage.setItem('myuser', JSON.stringify({ token: response.token, email: response.email }))
            toast.success('You are succesfully logged in!', {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                router.push(process.env.NEXT_PUBLIC_HOST)
            }, 1000);

        }
        else {
            toast.error('Invalid Credentials!', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }

    return (
        <div>
            <Head>
                <title>Login | DEVWEAR</title>
                <meta name="description" content="Checkout page of Your Website Name" />
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
            </Head>
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="flex md:h-[90vh] h-[72vh] items-center justify-center px-4  sm:px-6 lg:px-8 ">
                <div className="absolute top-0 left-0 right-0 w-screen h-full  blur-sm bg-cover md:h-screen">
                    <img src="/loginbg.jpg" alt="background" className='h-full w-full  object-top object-cover' />
                </div>
                <div className="w-full max-w-md space-y-8 backdrop-blur-lg hover:backdrop-blur-md px-6 py-6 rounded-3xl overflow-hidden transition duration-200 ease-in-out mt-14 md:mt-0">
                    <div>
                        <img className="mx-auto h-12 w-auto" src="/logo.png" alt="devwear" />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-900">
                            or,
                            <Link href={'/signup'} className='mt-2 text-center text-lg font-bold text-orange-700'> Sign Up</Link>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email" className="leading-7 text-sm text-gray-300 md:text-gray-900 font-semibold">Email address</label>
                                <input value={email} onChange={handleChange} id="email" name="email" type="email" required autoComplete='true' className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password" className="leading-7 text-sm text-gray-300 md:text-gray-900 font-semibold">Password</label>
                                <input value={password} onChange={handleChange} id="password" name="password" type="password" required className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Password" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">

                            <div className="text-sm">
                                <Link href={'/forget'} className="text-white md:text-pink-100 hover:text-red-200 md:hover:text-red-200 font-semibold text-base">Forgot your password?</Link>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="group relative flex w-full justify-center rounded-md backdrop-blur-3xl px-3 py-2 text-sm font-semibold text-white hover:backdrop-blur-[80px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-pink-500 group-hover:text-pink-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login
