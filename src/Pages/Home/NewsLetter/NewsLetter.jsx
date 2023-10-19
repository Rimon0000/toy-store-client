import React from 'react';
import newsletter from "../../../assets/newsLetter/newsLetter.png"

const NewsLetter = () => {
    return (
        <div className='my-10 pt-14 px-10'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10'>
            <div data-aos="fade-up" data-aos-duration="2000">
                <img src={newsletter} alt="" />
            </div>
            <div className='pt-5' data-aos="fade-down" data-aos-duration="2000">
                <h2 className='text-6xl font-bold mb-10 text-slate-600	'>Subscribe To Our Newsletter</h2>
                <p className='text-2xl mb-5'>Want to get special offers before they run out? 
                    Subscribe to our email to get exclusive discounts and offers.</p>

                <div className=" flex">
                  <input type="text" placeholder="Your Email Address" className="input input-bordered input-lg w-full max-w-xs" />
                  <button className="btn btn-active btn-lg btn-neutral">Subscribe</button>
                </div>
            </div>
             </div>
        </div>
    );
};

export default NewsLetter;