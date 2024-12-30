'use client'
import React from 'react'
import Image from "next/image"

import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
<IoIosStarHalf/>


const ProductItem = ({title,price,image,review,oldPrice}) => {
  return (
  
    <div className='max-w-[330px] sm:max-w-[300px] group '>
        <div className="inline-block relative border">
      <div className="overflow-hidden relative group">
        <Image 
          src={image} 
          alt="" 
          width={400} 
          height={400} 
          className="transform transition-transform duration-300 group-hover:scale-110" 
        />
        <div className="absolute inset-0 flex  justify-start items-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="h-[43px] w-[107px] rounded-sm m-5 flex justify-center items-center bg-blue-400 text-white">Add to Cart</div>
        </div>
      </div>
    </div>
        
        <div className="my-8">

            <h5 className='hover:text-blue-400 transform ease-in-out duration-300 mb-2 text-xl font-medium tracking-tight truncate text-gray-900'>{title}</h5>
            <p className='mb-3 text-xl tracking-tight text-black font-medium'><span className='text-gray-400 px-1 text-lg'>M.R.P:</span><span>₹</span>{price}  <span className='line-through ml-3'> {oldPrice? <span>₹</span>:""}{oldPrice}</span></p>
            <p className=' px-1 flex gap-2 text-black '> <span className='flex gap-1 font-medium text-xl text-blue-400'><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStarHalf/></span>{review}  <span className=''> reviews</span></p>
            
        </div>
        
      
    </div>
    
  )
}

export default ProductItem
