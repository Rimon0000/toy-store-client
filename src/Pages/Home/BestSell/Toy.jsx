import React from 'react';
import { FaStar } from "react-icons/fa";

const Toy = ({toy}) => {
    const {name, photo, price, rating} = toy

    return (
        <div className='border rounded p-5'>
            <div className='flex gap-5'>
                <div className='w-5/12'>
                    <img className='rounded' src={photo} alt="" />
                </div>
                <div className='w-7/12 text-start'>
                    <h2 className='font-semibold'>{name}</h2>
                    <p className='py-1'>Price: {price}</p>
                     <div className='flex items-center gap-5 font-semibold'>
                        <p className='flex'>
                           <FaStar></FaStar>
                           <FaStar></FaStar>
                           <FaStar></FaStar>
                           <FaStar></FaStar>
                           <FaStar></FaStar>
                        </p>
                        <p>{rating}</p>
                     </div>
                </div>
            </div>
            
        </div>
    );
};

export default Toy;