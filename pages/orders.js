import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const Orders = () => {

    const router = useRouter()
    const [orders, setOrders] = useState([])

    useEffect(() => {

        const fetchOrders = async () => {
            const a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: JSON.parse(localStorage.getItem('myuser')).token }),
            });
            let res = await a.json()
            setOrders(res.orders)
            // console.log(res)
        }

        if (!localStorage.getItem('myuser')) {
            router.push('/')
        }
        else {
            fetchOrders()
        }

    }, [])


    return (
        <div>
            <Head>
                <title>Orders | DEVWEAR</title>
                <meta name="description" content="Checkout page of Your Website Name" />
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
            </Head>
            <div className="container  mx-auto w-[90%] min-h-screen">

                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-x-auto">
                                <h1 className="font-semibold text-2xl text-center pt-8">Order History</h1>
                                <p className="text-gray-600 text-center">Check the status of recent orders</p>

                                {/* FOR LARGE SCREEN */}

                                <div className="md:block hidden">
                                    <div className="flex justify-evenly items-center bg-gray-400 h-16 mt-10">
                                        <p className="w-[20%]">Order Id</p>
                                        <p className="w-[20%]">Price</p>
                                        <p className="w-[20%]">Email</p>
                                        <p className="w-[20%]">Info</p>
                                    </div>

                                    {orders.map((item) => {
                                        return <div
                                            key={item._id} className="flex justify-evenly items-center mt-4 pb-5 border-b-2 border-gray-400 ">
                                            <p className="w-[20%]">{item.orderId}</p>
                                            <p className="w-[20%]">₹{item.amount}</p>
                                            <p className="w-[20%]">{item.email}</p>
                                            <p className="w-[20%] hover:text-blue-800">
                                                <Link href={`/order/?id=${item._id}`}>Details</Link>
                                            </p>
                                        </div>
                                    })}
                                </div>

                                {/* FOR MOBILE VIEW */}

                                {orders.map((item) => {
                                    return <div
                                        key={item._id} className="md:hidden mt-5 flex justify-between bg-gray-200  rounded-xl ">
                                        <div className="w-[65%]  p-3 flex flex-col justify-center ml-2 space-y-1">
                                            <p className="text-base">{item.orderId}</p>
                                            <p className="text-gray-800">₹{item.amount}</p>
                                        </div>
                                        <Link href={`/order/?id=${item._id}`} className="w-[25%]  flex justify-center items-center border-l-2 border-gray-400 bg-violet-200 font-semibold text-lg rounded-xl"><BsBoxArrowUpRight className='' /></Link>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Orders
