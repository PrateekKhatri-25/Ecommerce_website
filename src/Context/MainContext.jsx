import React, { createContext, useState } from 'react'

export const ContextAPI = createContext();
export default function MainContext({children}) {
    const [addWish,setAddWish]=useState([]);
    const [addCart,setAddCart]=useState([]);
  return (
    <ContextAPI.Provider value={{addWish,setAddWish,addCart,setAddCart}}>
        {children}
    </ContextAPI.Provider>
  )
}
