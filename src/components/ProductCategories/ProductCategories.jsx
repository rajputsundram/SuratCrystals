'use client'
import React from 'react'
import Link from 'next/link'
import CrystalPyramid from "../../../public/assets/Crystal_Pyramids_720x.webp"
import Bracelets from "../../../public/assets/Crystal_bracelets_720x.webp"
import CrystalTrees from "../../../public/assets/Crystal_trees_720x.webp"
import CrystalPlates from "../../../public/assets/Selenite_crystal_plate_720x.webp"

const dataType=[Bracelets,CrystalPlates,CrystalPyramid,CrystalTrees]
const ProductCategories = () => {
  return (
   <div className='flex flex-col items-center text-center justify-center my-28 '>
    <h1 className='font-extrabold text-6xl'>Explore Our Categories</h1>
    <p className='text-2xl my-5 lg:w-[50%] md:w-[80%]'>Discover unique, handpicked crystal products</p>


<div className='flex gap-6 flex-wrap my-20 justify-center'>
  {
    dataType.map((item,index)=>{
      return(
<div
      key={index}
      className="flex justify-center items-center bg-cover bg-center h-96 w-96 hover:scale-105 duration-300 ease-in-out transform  inset-0"
      style={{ backgroundImage: `url(${item.src})` }}
    >

<Link href={"/"}><div className='border-2 border-blue-400 hover:underline hover:bg-opacity-50 duration-200 ease-in-out transform   z-10 rounded-sm h-12 w-28 flex justify-center items-center bg-white text-black'>Shop</div></Link>

</div>
      )

    })
  }
</div>
   </div>
   
  )
}

export default ProductCategories
