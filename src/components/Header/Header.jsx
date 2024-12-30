'use client';
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Logo from '../../../public/assets/logo.avif';
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
  };

  const LoginSecData = [
    <IoIosSearch key="search" />,
    <FaUser key="user" />,
    <LiaShoppingBagSolid key="bag" />,
  ];

  return (
    <div className="shadow-lg">
      <div className="pt-4 pb-4 lg:hidden">
        <div className='flex justify-between items-center px-4'>
          <Link href="/" className="flex items-center">
            <Image src={Logo} width={120} height={100} alt="logo" />
          </Link>
          <div className='flex items-center gap-4'>
            {LoginSecData.map((item, index) => (
              <Link key={index} href='/'>
                <span className='text-[24px]'>{item}</span>
              </Link>
            ))}
            <FaBars onClick={toggleNav} className="text-[24px] cursor-pointer" />
          </div>
        </div>
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isNavVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          {isNavVisible && <MobileNav />}
        </div>
      </div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
