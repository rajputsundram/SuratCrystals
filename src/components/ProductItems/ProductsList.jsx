'use client'
import { produt_data } from '../../../public/assets/assets'
import React from 'react'
import ProductItem from './ProductItem'
import Link from 'next/link';


const ProductList = () => {
   
  return (
    <>
    <div className='flex justify-center items-center my-12'><h1 className='text-5xl font-extrabold'>Exclusive Collection
    </h1></div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {produt_data.map((item,index)=>{
            return <ProductItem key={index} image={item.image} title={item.title} price={item.price} review={item.review} oldPrice={item.oldPrice}/>
        })}
      </div>
      
    <Link href={'/'} className='flex justify-center items-center text-center' ><div className='    transform ease-in-out duration-300 flex justify-center items-center text-center h-[45px] mb-56 rounded-sm w-[100px] bg-blue-500  text-white hover:underline  hover:bg-blue-500 hover:shadow-lg'>Show More</div></Link>
      </>
    
  )
}

export default ProductList
