import axios from 'axios';
import './App.css';
import Header from './Common/Header';
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function App() {
  ////disp Category
  const [cat, setCat] = useState([])
  // console.log(cat);
  let dispCat = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((ress) => {
        setCat(ress.data);
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  ////disp products
  let api;
  const [myProduct, setMyProducts] = useState([])
  let dispProducts = (input="") => {
    
    if(input!=""){
      api=(`https://dummyjson.com/products/search?q=${input}`)
    }
    else{
      api='https://dummyjson.com/products?limit=100'
    }
    
    axios.get(api)
      .then((ress) => {
        setMyProducts(ress.data.products);
      })
      .catch((error)=>{
        console.log(error);
      })
  }
  ////searhinput
  let SearchInput=(e)=>{
    let search=(e.target.value);
    
    dispProducts(search);

  }

  useEffect(() => {
    dispCat();
    dispProducts();
  }, [])
  return (
    <>
      <Header />
      <div className='border grid grid-cols-[20%_80%] '>
        <div className='text-[30px] font-bold text-center '>
          Category
          <div className=''>
            {cat.length > 0 ?
              cat.map((v, i) => {
                return (
                  <ListItem listData={v} listIndex={i} key={i} myState={setMyProducts} />
                )
              })
              :
              <WaitingCat/>
              }
          </div>
        </div>

        <div >
        <div className='text-[30px] font-bold text-center '>
        All Products 
        </div>
          
          <div>
          <input type='text' className='border border-[black] w-[95%] rounded-[20px] my-[10px] p-[5px]' placeholder='Enter product name...' onChange={SearchInput}/>
          </div>
          <div className='grid grid-cols-4 gap-2'>
            {myProduct.length > 0 ?
              myProduct.map((v, i) => {
                return (
                  <Mycard pData={v} pIndex={i} key={i} />
                )
              })
              : 
              <>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              <div>
               <LoadingProduct/>
              </div>
              
              </>
             
              }

          </div>
        </div>
      </div>
    </>
  );
}

export default App;


let ListItem = ({ listData, listIndex ,myState}) => {
 
  let getCat=(slugname)=>{
  
    axios.get(`https://dummyjson.com/products/category/${slugname}`)
    .then((ress)=>{
      myState(ress.data.products);
    })
   
  }
  return (
    <div>
      <ul className="w-full text-sm font-medium border rounded-[10px]">
        <li className="w-full px-4 py-2 border-b rounded-[10px] hover:bg-[#ccc] cursor-pointer " onClick={()=>getCat(listData.slug)}> {listData.name} </li>
      </ul>
    </div>
  )
}

let Mycard = ({ pData, pIndex }) => {
  return (
    <Link to={`/product_detail/${pData.id}`}>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg" src={pData.thumbnail} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight h-[80px] ">{pData.title}</h5>
        </a>
        <p className="mb-3 text-[16px] font-normal text-gray-700 dark:text-gray-400">Brand:{pData.brand}</p>
        <p className="mb-3 text-[16px] font-normal text-gray-700 dark:text-gray-400">Price:{pData.price}</p>
        <Link to={`/product_detail/${pData.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         Tap to See Details
        </Link>
      </div>
    </div>
    </Link>
  )
}


function LoadingProduct() {
  return (
    <div>
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm  mx-auto w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WaitingCat() {
  return (
    <div>
      <button type="button" className="bg-indigo-500 border-0 rounded-[10px] p-2 w-50 text-center flex justify-center " disabled>
      <AiOutlineLoading3Quarters className='animate-spin h-5 w-5 mr-3' />
  <span className='text-[14px]'>Processing...</span>
</button>
    </div>
  )
}
// animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24
