'use client'
import React from 'react';
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";

const Shipments = () => {
    const SupportData = [
        { icon: <FaShippingFast />, heading: "Fast Shipping", title: "" },
        { icon: <RiSecurePaymentLine />, heading: "Secure Payment", title: "" },
        { icon: <TbTruckReturn />, heading: "Easy Return", title: "" },
        { icon: <MdOutlineSupportAgent />, heading: "24X7 Support", title: "" },
    ];

    return (
        <div className='my-24 bg-yellow-100'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-14 px-4 py-8'>
                {SupportData.map((item, index) => (
                    <div key={index} className='flex flex-col lg:flex-row justify-center items-center text-center lg:text-left'>
                        <div className='text-5xl text-blue-400 mb-4 lg:mb-0 lg:mr-2'>
                            {item.icon}
                        </div>
                        <div>
                            <p className='font-bold text-xl lg:text-3xl'>{item.heading}</p>
                            {item.title && <p className='text-base lg:text-xl'>{item.title}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shipments;
