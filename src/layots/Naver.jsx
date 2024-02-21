import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import List from '../components/List'
import Icons from '../iconss/Icons'
import Hadding from '../components/Hadding'
import { FaSearch ,FaUser ,FaAngleDown ,FaShoppingCart  } from "react-icons/fa";

const Naver = () => {
  return (

    <>

      <Container>
        <div className="py-10">
          <Flex>
            <div className="w-2/5">
              <Link> <Image src={logo} alt='logo.png' /></Link>
            </div>
            <div className="">
              <ul>
                <Flex>
                  <Link to='/'><List className='text-lg font-dm text-ash mr-10 hover:text-black hover:font-bold' manuName='Home' /></Link>
                  <Link to='shop/'><List className='text-lg font-dm text-ash mr-10 hover:text-black hover:font-bold' manuName='Shop' /></Link>
                  <Link to='about/'><List className='text-lg font-dm text-ash mr-10 hover:text-black hover:font-bold' manuName='About' /></Link>
                  <Link to='Contacts/'><List className='text-lg font-dm text-ash mr-10 hover:text-black hover:font-bold' manuName='Contacts' /></Link>
                  <Link to='/'><List className='text-lg font-dm text-ash  hover:text-black hover:font-bold' manuName='Journal' /></Link>
                </Flex>
              </ul>
            </div>
          </Flex>
        </div>
      </Container>
      <div className="bg-navBg py-10 border border-borDer">
        <Container>
          <Flex className='items-center'>
            <div className="w-1/4">
              <Flex className='items-center gap-2'>
                <Icons />
                <Hadding className='font-dm font-semibold' hedText='Shop by Category' />


              </Flex>
            </div>
            <div className="w-1/2">
         <div className=" relative ml-4">
         <input className='w-full py-5 pl-5' type="text" placeholder='Search Products' />
              <FaSearch className='absolute right-10 top-6'/>

         </div>
            </div>
            <div className="w-1/5 flex justify-end gap-10">
              <Flex className='gap-1'>
             <Link to='login/'>
             <FaUser />
             </Link>
              <FaAngleDown  />
              </Flex>
              <FaShoppingCart />
            
            
            </div>
          </Flex>
        </Container>


      </div>
    </>
  )
}

export default Naver