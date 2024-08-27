import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextAPI } from '../Context/MainContext'

export default function Header() {
    let {addWish,setAddWish,addCart,setAddCart} = useContext(ContextAPI)
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecommerce</span>
                    </Link>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to={"/"} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
                            </li>
                            
                            <li>
                                <Link to={"/wish"} href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Wishlist
                                {addWish.length>0 ? 
                                <sup className='w-[20px] h-[10px] bg-[red] rounded-[50%] m-[5px] px-[5px]'>{addWish.length}</sup>
                                :
                                ""}
                                </Link>
                            </li>
                            <li>
                                <Link to={"/cart"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Bag
                                {addCart.length>0 ? 
                                <sup className='w-[20px] h-[10px] bg-[red] rounded-[50%] m-[5px] px-[5px]'>{addCart.length}</sup>
                                :
                                ""}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
