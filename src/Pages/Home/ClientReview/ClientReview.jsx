import React from 'react';
import img1 from "../../../assets/review/men2.jpg"
import img2 from "../../../assets/review/men3.jpg"
import img3 from "../../../assets/review/women1.jpg"
import img4 from "../../../assets/review/women2.jpg"
import kids from "../../../assets/review/kids.jpg"

const ClientReview = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold pt-5 px-5 pb-2'>client Review</h2>
            <p className='text-center font-semibold mb-10 text-stone-800'>Check out what client says</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 px-5'>
                <div className='mt-3'>
                    <div className='flex items-center gap-5'>
                        <img className='w-20 h-20 rounded-full' src={img1} alt="" />
                        <p className='text-sm font-semibold'>"I can't say enough good things about this toy store! The selection is amazing, 
                            and the staff is incredibly helpful. I found the perfect gift for my niece's birthday, 
                            and I'll definitely be back for more shopping."</p>
                    </div>
                    <div className='flex items-center gap-5 my-4'>
                        <img className='w-20 h-20 rounded-full' src={img2} alt="" />
                        <p className='text-sm font-semibold'>"I adore this place! Not only do they have the latest toys, 
                           but they also have a section for educational toys and games. 
                           It's a one-stop-shop for my kids' entertainment and learning needs."</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img className='w-20 h-20 rounded-full' src={img3} alt="" />
                        <p className='text-sm font-semibold'>"The customer service here is exceptional. 
                        I had a problem with a toy I purchased, and they exchanged it without any hassle. 
                        They really care about their customers' satisfaction."</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img className='w-20 h-20 rounded-full mt-4' src={img4} alt="" />
                        <p className='text-sm font-semibold'>"This toy store is a parent's dream come true. 
                        I appreciate the emphasis on quality and educational value. My kids have learned so much 
                        through play with the toys we've bought here."</p>
                    </div>


                </div>
                <div>
                    <img className='rounded-lg' src={kids} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default ClientReview;