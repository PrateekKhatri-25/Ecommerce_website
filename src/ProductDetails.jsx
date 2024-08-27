import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header from './Common/Header';
import axios from 'axios';
import { SiG2 } from 'react-icons/si';
import { ContextAPI } from './Context/MainContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetails() {
    const [singleData, setSingleData] = useState([]);
    const [smallimage, setSamllImage] = useState([]);
    const [bigImg,setBigImg]=useState([]);
    const [convert,setConvert] = useState();

    // console.log(singleData);
    let location = useLocation();
    let myId = (location.pathname);
    let mainId = (myId.split('/')[2]);
    let dispData = () => {
        axios.get(`https://dummyjson.com/products/${mainId}`)
            .then((ress) => {
                setSingleData(ress.data);
                setSamllImage(ress.data.images);
                setBigImg(ress.data.thumbnail);
                setConvert({
                    Utitle:ress.data.title,
                    Uimage:ress.data.thumbnail,
                    Uqnty:"1",
                    Ucat:ress.data.category,
                    Uprice:ress.data.price
                })
            })
    }
    useEffect(() => {
        dispData()
    }, [])

    //to wishlist
    let {addCart,setAddCart,addWish,setAddWish}=useContext(ContextAPI);
    let toWishlist=()=>{
        setAddWish([...addWish,convert])
        toast.success("Item added to Wishlist")

    }

    return (
        <div>
            <Header />
            <ToastContainer/>
            <div>
                <div className="antialiased">

                    <div className="py-6">

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                            <div className="flex flex-col md:flex-row -mx-4">
                                <div className="md:flex-1 px-4">
                                    <div x-data="{ image: 1 }" x-cloak='true'>
                                        <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                                            <div x-show="image === 1" className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                                                <img src={bigImg} className='w-full h-full'/>
                                            </div>
                                            <div className='flex gap-2'>
                                                {smallimage.map((v, i) => {
                                                    return (
                                                        <div onClick={()=>setBigImg(v)}  className='w-[200px] h-[200px] border rounded-[10px]'>
                                                            <img src={v} className='w-full h-full' />
                                                        </div>
                                                    )
                                                })}

                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className="md:flex-1 px-4">
                                    <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"> {singleData.title} </h2>

                                    <div className="flex items-center space-x-4 my-4">
                                        <div>
                                            <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                                <span className="text-indigo-400 mr-1 mt-1">$</span>
                                                <span className="font-bold text-indigo-600 text-3xl"> {singleData.price} </span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-green-500 text-xl font-semibold">Rating:{singleData.rating}</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-500">
                                        {singleData.description}
                                    </p>

                                    <div className="flex py-4 space-x-4">
                                        <button type="button" onClick={toWishlist} className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                                            Add to WishList
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
