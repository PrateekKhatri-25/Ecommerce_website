import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from './Common/Header'
import { ContextAPI } from './Context/MainContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function AddtoCart() {
    let { addWish, setAddWish, addCart, setAddCart } = useContext(ContextAPI);
    return (
        <div>
            <Header />
            <ToastContainer />
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
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-[5%]"
                                        >
                                            Sr. NO.
                                        </th>
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
                                            Quantity
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            {/* Status */}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Remove Item
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {addCart.length > 0 ?
                                        addCart.map((v, i) => {
                                            return (
                                                <Tr v={v} i={i} />
                                            )
                                        })
                                        :
                                        <tr className="text-[20px] text-center  border-b border-gray-200 bg-white text-sm">
                                            <td></td>
                                            <div className='p-[10px] text-center'>To add item <Link to={"/wish"} className='text-[blue]' >Go To WishList</Link> </div>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Total />
                </div>
            </div>
        </div>
    )
}

function Tr({ v, i }) {
    let { addWish, setAddWish, addCart, setAddCart } = useContext(ContextAPI);
    //// deleteitem
    let deleteItem = (delId) => {
        let updateitem = addCart.filter((v, i) => i != delId)
        setAddCart(updateitem);
        toast.error("Item Romoved from Cart")
    }
    let handelInput = (e) => {
        let Newcount = (e.target.value);
        let oldData = [...addCart];
        oldData[i].Uqnty = Newcount;
        setAddCart(oldData)
    }
    return (
        <tr>
            <td className='text-center'> {i + 1} </td>
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
                <p className="text-gray-900 whitespace-no-wrap">${((v.Uprice) * (v.Uqnty)).toFixed(2)}</p>
                <p className="text-gray-600 whitespace-no-wrap">USD</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <input type='number' onChange={handelInput} className='border-2 p-[5px]' min={1} defaultValue={v.Uqnty} max={8} />
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

            </td>
            <td
                className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
            > <button type="button" onClick={() => deleteItem(i)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete Item</button>
            </td>
        </tr>
    )
}

function Total() {
    let { addWish, setAddWish, addCart, setAddCart } = useContext(ContextAPI);
    const [amt, setAmt] = useState([])
    let totalamt = () => {
        let total = 0;
        addCart.forEach((items, i) => {
            total += ((items.Uprice) * (items.Uqnty));
        });
        setAmt(total);
    }
    useEffect(() => {
        totalamt()
    }, [addCart])
    return (
        <>
            <table className="min-w-[500px] bg-slate-400 mx-auto leading-normal">
                <tbody>
                    <tr>
                        <td className='p-2'>Total Amount</td>
                        <td className='bg-[#ccc] p-2 '> {(amt)} </td>
                    </tr>
                    <tr>
                        <td className='p-2'>Tax (0.18%)</td>
                        <td className='bg-[#ccc] p-2 '> {(amt*0.18)} </td>
                    </tr>
                    <tr>
                        <td className='p-2'>Shipping Charges</td>
                        <td className='bg-[#ccc] p-2 '> {((amt) + (amt * 0.18)) < 100 ? "50" : "Free Shipping"} </td>
                    </tr>
                    <tr>
                        <td className='p-2'>Final Amount</td>
                        <td className='bg-[#ccc] p-2 '>{((amt) + (amt * 0.18))}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
