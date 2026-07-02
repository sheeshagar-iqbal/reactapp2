import React from 'react'
import logo from '../image/logo.png'
import { MdOutlineSearch } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";

export const Navbar13 = () => {
  return (
    <>
       <div className=' shadow-md  bg-white dark:bg-gray-400 dark:text-white duration-300 relative z-40' >
         {/* upper nav  */}
        <div className='bg-amber-700 py-2'>
            <div className=' flex gap-2 justify-between items-center '>
                {/* logo */}
                <div>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2  '>
                        <img src={logo} alt=""  className='w-1'/>
                        Shopsy
                    </a>
                </div>

                {/* search bar  */}
                <div className='flex items-center gap-3'>
                    <div className='group relative hidden  sm:block'>
                        <input type="search" placeholder='search'
                        className='w-50 sm:w-50 group-hover:w-80 transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-0 focus:border-orange-400' />
                    {/* <i className="fa-solid fa-magnifying-glass " ></i> */}
                    <MdOutlineSearch  className='text-gray-800 absolute top-1/3 right-4'/>
                    </div>
                     {/* button */}
                     <button onClick={()=>alert('Ordering not Available yet')}  className='bg-green-500 from-gray-700 to-gray-100 transition-all duration-200 text-white py-1 px-4 rounded-b-full flex items-center gap-2.5 group:'>
                    <span className=' group-hover:block hidden transition-all duration-200 '>order</span>
                    <CiShoppingCart  className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                </button>
                {/* mode */}



                </div>
               
               
            </div>

        </div>
        {/* lower nav  */}
        <div>

        </div>
       </div>
    </>
  )
}
