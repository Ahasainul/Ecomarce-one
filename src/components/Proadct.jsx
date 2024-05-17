import React from 'react'
import Flex from '../components/Flex'
import { FaHeart } from "react-icons/fa";
import { FaCartShopping, FaRepeat } from "react-icons/fa6";

const Proadct = ({ products }) => {
    return (
        <>
            <div className="">
                <div className=" ">
                    <div className="group relative">
                    <img className='w-[370px] h-[370px]' src={products.thumbnail} alt="" />
                    <div className="h-40 bg-white absolute bottom-0 left-0 w-full group-hover:visible invisible">
                <div className="pr-5  ">
              <Flex className='items-center justify-end gap-4 pt-6 '>  <button className=' hover:text-black hover:font-bold' >Add to Wish List</button>
                <FaHeart /></Flex>
         
              <Flex className='items-center justify-end gap-4 py-4 '>  <button className=' hover:text-black hover:font-bold' >Compare</button>
                <FaRepeat /></Flex>
              <Flex className='items-center justify-end gap-4  '>  <button className=' hover:text-black hover:font-bold'  >Add to Cart</button>
                <FaCartShopping /></Flex>
            </div>
                </div>

                    </div>
                    <h1 className='w-[370px] '>{products.title}</h1>
                    <p className='text-base w-[300px] '>{products.description}</p>
                    <p className='text-base w-[300px] '>{products.price}</p>
                </div>
                

            </div>
        </>
    )
}

export default Proadct