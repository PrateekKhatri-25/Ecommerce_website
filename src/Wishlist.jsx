import React, { useContext } from 'react'
import Header from './Common/Header'
import { ContextAPI } from './Context/MainContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function Wishlist() {
    let { addWish, setAddWish, addCart, setAddCart } = useContext(ContextAPI);
    // console.log(addWish);
    ///deleteing item
    let deleteItem=(delId)=>{
        let updateCart = addWish.filter((v,i)=>i!=delId)
        setAddWish(updateCart);
        toast.error('Item Removed from WishList');
    }

    //// move to cart
    let additem=(itemdetail,delId,thumbnail)=>{
        setAddCart([...addCart,itemdetail]);
        let updateCart = addWish.filter((v,i)=>i!=delId)
        setAddWish(updateCart)
        toast.success("Item added to Cart")
    }

    return (
        <div>
            <Header />
            <ToastContainer/>
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Invoices</h2>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div
                            className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                        >
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Product
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Amount
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Delete Item
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Move to Cart
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {addWish.length > 0 ?
                                    addWish.map((v,i)=>{
                                        return(
                                        <tr>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img
                                                            className="w-full h-full rounded-full"
                                                            src={v.Uimage}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {v.Utitle}
                                                        </p>
                                                        <p className="text-gray-600 whitespace-no-wrap">{v.Ucat}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">${v.Uprice}</p>
                                                <p className="text-gray-600 whitespace-no-wrap">USD</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <button type="button" onClick={()=>deleteItem(i)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete Item</button>
                                            </td>

                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <button type="button" onClick={()=>additem(v,i,v.Uimage)} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Move to Cart</button>
                                            </td>
                                        </tr>
                                        )
                                    })

                                        :
                                        <tr className="text-[20px] text-center  border-b border-gray-200 bg-white text-sm">
                                            <td></td>
                                            <div className='p-[10px] text-center'>To add item <Link to={"/"} className='text-[blue]'>Go To Home</Link> </div>
                                        </tr>
                                        }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}