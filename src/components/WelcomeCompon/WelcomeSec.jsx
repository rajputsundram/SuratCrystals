import React from 'react'
import Link from 'next/link'

const WelcomeSec = () => {
  return (
    <div className='mx-0 my-24 flex gap-8 flex-col justify-center text-center items-center'>
        <h1 className='font-extrabold text-6xl'>Welcome to Surat Crystal</h1>
        <p className='text-xl lg:w-[50%] md:w-[80%]'>At Surat Crystal, we offer a collection of finely crafted crystal pieces designed to add elegance to any space. Each item is created with care and attention to detail, ensuring top-quality craftsmanship for every occasion</p>
        <Link href={"/"}><div className='hover:underline hover:shadow-slate-500 ease-in-out transition-all shadow-lg  rounded-sm h-12 w-28 flex justify-center items-center bg-black text-white'>Shop Now</div></Link>
    </div>
  )
}

export default WelcomeSec
