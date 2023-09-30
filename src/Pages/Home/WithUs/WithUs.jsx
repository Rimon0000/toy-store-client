import React from 'react';
import { FaMoneyCheck, FaShippingFast,FaStarHalfAlt } from 'react-icons/fa';


const WithUs = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold m-5 p-5'>Why Choose US?</h2>
            <div className="carousel rounded-box grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 mx-10 gap-16">
                <div className="carousel-item" data-aos="fade-right" data-aos-duration="2000">
                    <div className=" w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                        <div className='text-center mx-auto ml-28'>
                            <FaStarHalfAlt className='text-center text-6xl text-red-500'></FaStarHalfAlt>
                        </div>
                        </figure>
                        <div className="card-body items-center text-justify">
                            <h2 className="card-title font-bold text-2xl">Quality and Reliability</h2>
                            <p className='font-semibold'>We are committed to delivering top-notch quality in everything we do. From our products to our services, we strive for excellence and go above and beyond to meet and exceed our customers' expectations. </p>
                        </div>
                    </div>  
                </div> 
                <div className="carousel-item" data-aos="fade-up" data-aos-duration="2000">
                    <div className=" w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                        <div className='text-center mx-auto ml-28'>
                            <FaMoneyCheck className='text-center text-6xl text-red-500'></FaMoneyCheck>
                        </div>
                        </figure>
                        <div className="card-body items-center text-justify">
                            <h2 className="card-title font-bold text-2xl">PAYMENT SECURITY</h2>
                            <p className='font-semibold'>We utilize trusted and reputable payment gateways that employ industry-standard encryption and security protocols.</p>
                        </div>
                    </div> 
                </div> 
                <div className="carousel-item" data-aos="fade-left" data-aos-duration="2000">
                    <div className=" w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                            <div className='text-center mx-auto ml-28'>
                                <FaShippingFast className='text-center text-6xl text-red-500'></FaShippingFast>
                            </div>
                            </figure>
                            <div className="card-body items-center text-justify">
                                <h2 className="card-title font-bold text-2xl">Expertise and Experience</h2>
                                <p className='font-semibold'>We pride ourselves on our extensive expertise and years of experience in the industry. Our team consists of highly skilled professionals who are well-versed in their respective fields.</p>
                            </div>
                        </div> 
                </div> 
            </div>
            
        </div>
    );
};

export default WithUs;