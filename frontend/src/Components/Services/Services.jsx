import React from 'react';
import { FaCarSide } from "react-icons/fa"
import { FaHeadphonesAlt } from 'react-icons/fa';
import { FaWallet } from "react-icons/fa"
import { FaCheckCircle } from 'react-icons/fa';

const ServicesData = [
    {
        id: 1,
        icon: <FaCarSide className="md: text-5xl text-primary" />,
        title: "Free Shipping",
        description: "Free Shipping On All Order",
    },
    {
        id: 2,
        icon: <FaCheckCircle className="md: text-5xl text-primary" />,
        title: "Safe Money",
        description: "30 Days Money Back",
    },
    {
        id: 3,
        icon: <FaWallet className="md: text-5xl text-primary" />,
        title: "Secure Payment",
        description: "All Payment Secure",
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className="md: text-5xl text-primary" />,
        title: "Online Supoort 24/7",
        description: "Technical Support 24/7",
    },
];
    
const Services = () => {
    return (
        <div>
            <div className="container mt-14 md:my-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                    {ServicesData.map((data, index) => (
                        <div key={index} className='flex flex-col items-start sm:flex-row gap-4'>
                            <div>{data.icon}</div>
                            <div>
                                <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                                <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;