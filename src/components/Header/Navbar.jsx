'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Link  from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/assets/logo.avif'
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Navbar = () => {
  const pathname=usePathname();

  // navbar data
  const NavData=[
    {name:"Home",path:"/"},
    {name:"Crystal Brcelets",path:"/CrystalBrcelets"},
    {name:"Crystal Trees",path:"/CrystalTrees"},
    {name:"Pyramid",path:"/Pyramid"},
    {name:"RechargingPlates",path:"/Recharging Plates"},
    {name:"Contact",path:"/Contact"},

   ]

   const LoginSecData=[
    < IoIosSearch />,
    <FaUser />,
 
    <LiaShoppingBagSolid/>,
   ]
  return (
    <div className='mx-0 px-0 h-[100px]  border border-b-black flex justify-between items-center'>
      {/* logo */}
     <Link href={"/"} className='lg:ml-10 sm:5 md:7' ><Image src={Logo} width={180} height={30} alt=''/></Link>

     
      {/* navbar links */}
{/* navbar links */}
<div className='max-w-full min-w-[200px]   flex flex-wrap text-start space-x-3'>
  {NavData.map((navLinks, index) => (
    <Link key={index} href={navLinks.path}   className={`${navLinks.path === pathname && "underline "} capitalize font-medium hover:underline text-lg p-2 cursor-pointer`} >
      <span className=''>
        {navLinks.name}
      </span>
    </Link>
  ))}
</div>

{/* login section */}
      <div className='lg:mr-[100px] sm:mr-1 md:mr-6 gap-3 flex lg:gap-10   md:gap-6 justify-center items-center  '>
        {
          
          LoginSecData.map((items,index)=>{
            return(
              <Link key={index} href={'/'}><span className='text-[24px] '>{items}</span></Link>
            )
          })
      
        }


      </div>

      
    </div>
  )
}

export default Navbar
