'use client';

import React from 'react';
import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IoIosStar } from "react-icons/io";
import Slider from 'react-slick';
import userImg from '../../../public/assets/user.png';

const star = [<IoIosStar/>, <IoIosStar/>, <IoIosStar/>, <IoIosStar/>];

const ReviewCompo = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show only one slide at a time
        slidesToScroll: 1,
        centerMode: true, // Center the active slide
        centerPadding: '0px', // No padding on either side of the centered slide
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                centerPadding: '0px', // Adjust padding for medium screens
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerPadding: '0px', // Adjust padding for small screens
              }
            },
        ]
    };

    const reviewData = [
        { userImgs: userImg, userName: 'John Doe', reviewTxt: 'Elegant, user-friendly websites showcasing crystal collections with detailed descriptions, high-quality images, and secure shopping.' },
        { userImgs: userImg, userName: 'Jane Smith', reviewTxt: 'Elegant, user-friendly websites showcasing crystal collections with detailed descriptions, high-quality images, and secure shopping.' },
        { userImgs: userImg, userName: 'Alice Johnson', reviewTxt: 'Elegant, user-friendly websites showcasing crystal collections with detailed descriptions, high-quality images, and secure shopping.' }
    ];

    return (
        <div className="max-w-screen-lg mx-auto px-4"> 
            <h1 className='text-center font-bold text-3xl lg:text-5xl mb-8 lg:mb-28'>Our Clients’ Words</h1>
            <Slider {...settings}>
                {reviewData.map((items, index) => (
                    <div key={index} className='px-4'>
                        <div className='flex justify-center lg:justify-start gap-1 mb-2'>
                            {star.map((item, starIndex) => (
                                <p key={starIndex} className='text-blue-400 text-xl'>{item}</p>
                            ))}
                        </div>
                        <p className="my-4 font-medium text-lg lg:text-2xl text-center lg:text-left">{items.reviewTxt}</p>
                        <div className='flex justify-center lg:justify-start items-center text-center gap-4 lg:gap-6'>
                            <div className='relative h-20 w-20'>
                                <Image src={items.userImgs} layout='fill' className='rounded-full object-cover' alt={items.userName} />
                            </div>
                            <span className='font-medium text-lg lg:text-xl'>{items.userName}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ReviewCompo;
