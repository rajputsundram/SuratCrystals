'use client'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import Link from 'next/link';
import Logo from '../../../public/assets/logo.avif'
const Footer=()=>{
 
    const icons=[
        {icon:<FaXTwitter />,path:''},
        {icon:<FaFacebookF />,path:''},
        {icon:<FaLinkedin />,path:''},
        {icon:<FaInstagram />,path:''}

    ]
    const links=[
        {name:" About Us",path:"/"},
        {name:"Return Policy",path:"/"},
        {name:"Shipping Policy",path:"/"},
        {name:" Privacy Policy",path:"/"},
        {name:"  Refund / Cancellation Policy",path:"/"},
        {name:"Contact Us",path:"/contact"},
        {name:" Terms & Conditions",path:"/"},
    ]
    return(<>
    <div className="mt-20 w-full flex sm:flex-row flex-col bg-black h-full sm:mt-5 ">

        <div className="flex justify-center items-center p-3 flex-col h-[500px] bg-blue-500 ml-1 sm:ml-40 w-full sm:w-[30%]">
            <div className=" "><Image src={Logo}></Image></div>
                {/* <span className="text-lg text-white"></span> */}
    
          <div className="h-[80px] flex items-center w-[70%]"> 
            <input type="email" placeholder=' Your Email' className="h-[50px] w-[80%] pl-2 outline-none"/>
            <span className=" h-[50px] w-[100px] flex  items-center justify-center  text-white  bg-black">Subscribe</span>
          </div> 

        </div>

        <div className="bg-black w-full sm:w-[20%] p-[30px]">
            <h2 className='mt-[20px] h-[100px] flex items-center text-white'>Get in Touch</h2>
            <div className="flex h-[25px]  items-center justify-start font-[18px] mt-5 "><span className="text-blue-400"><CiLocationOn /></span><p className='text-white ml-2'>Your,location</p></div>
            <div className="flex h-[25px] items-center justify-start mt-[5px] text-[18px] font-medium "><span className="text-blue-400"><MdOutlineEmail />
            </span><p className='text-white ml-2' >
            suratcrystal@gmail.com</p></div>

            <div className="h-[25px] mt-2 font-medium items-center justify-start flex"><span className="text-blue-300"><IoCall /></span><p className='ml-2 text-white'>
            +91 0003333000</p></div>
            <div className=' h-[80px] mt-[30px] flex gap-2 '>
                {
                icons.map((item,index)=>{
                    return(
                        <>
                      <div  className="bg-blue-600 w-[40px] h-[40px] flex justify-center items-center text-white rounded-full hover:bg-white hover:text-blue-500 transform ease-in-out duration-300  ">{item.icon}</div>
                        </>
                    )
                })
            }
          
            </div>
            


        </div>



        <div className='flex  sm:gap-20'>
        <div className="bg-black w-[100%] p-[30px]">
        <h2 className='mt-[20px] h-[100px] flex items-center text-white'>Quick Links</h2>
                {
                    links.map((item,index)=>{
                        return(

                        <>
                        <div>
                            <div className='flex  items-center text-white p-1'>
                                <p className=' text-extrabold text-blue-300 text-2xl '><IoIosArrowRoundForward/></p>
                            <Link href={item.path}>{item.name}</Link>
                            </div>
                        </div>
                        </>
                        )
                    })
                }

            </div>
            <div className="bg-black w-fll sm:w-[110%] p-[30px]">
        <h2 className='mt-[20px] h-[100px] flex items-center  text-white'>Popular Links</h2>
                {
                    links.map((item,index)=>{
                        return(

                        <>
                        <div>
                            <div className='flex   items-center text-white p-1'>
                                <p className=' text-extrabold text-blue-300 text-2xl '><IoIosArrowRoundForward/></p>
                            <Link href={item.path}>{item.name}</Link>
                            </div>
                        </div>
                        </>
                        )
                    })
                }

            </div>
            <div>

            </div>
        </div>

        

        

    </div>
    <div className="h-[100px] flex justify-center items-center w-full bg-black text-white ">
    <p>	&#169; Surat Srystal.  All Rights Reserved.  Designed By Sundram Rajput</p>

</div>
    </>)
}

export default Footer;