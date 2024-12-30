
'use client'
import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";

import { usePathname } from 'next/navigation'
import Link from "next/link"
// import {CiMenuFries} from 'react-icons/ci'






const links=[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Crystal Brcelets',
        path:'/CrystalBrcelets'
    },
    {
        name:'Crystal Trees',
        path:'/CrystalTrees'
    },
    {
        name:'Pyramid',
        path:'/Pyramid'
    },

    {
        name:'RechargingPlates',
        path:'/RechargingPlates'
    },

    {
        name:'Contact',
        path:'/Contact'
    },
]
function MobileNav() {
  
    const pathname=usePathname();
  return (
  <div className="">
    <div className='flex mb-6 mt-1 text-center justify-center items-center'>
  
    <div className='flex justify-center items-center'>
        {/* <CiMenuFries className='mx-10  text-[32px] ' ></CiMenuFries> */}
    </div>
    </div>
    <div className="flex flex-col ">
        <nav className='flex flex-col justify-center items-center gap-6'>
            {links.map((link,index)=>{
            return <Link href={link.path} key={index} className={`${link.path===pathname&&" underline"} text-xl capitalize transition-all duration-500`}>{link.name}</Link>
        })}</nav>
    </div>
  </div>
  )
}

export default MobileNav
