import React from 'react';
import { FaGlobeAmericas, FaLocationArrow, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import contact from "../../../assets/contact/contact.jpg"

const Contact = () => {
    return (
        <div className='mt-10 bg-base-200 shadow-xl px-20'>
            <h2 className='text-center text-4xl font-bold m-5 p-5'>Contact us</h2>
            <div className='grid lg:grid-cols-4 text-center mx-auto'>
                <div data-aos="flip-left" data-aos-duration="2000">
                <FaMapMarkerAlt className='text-5xl text-center mx-auto bg-gray-400 text-white rounded-full mb-5 p-4'></FaMapMarkerAlt>
                <p className='font-semibold'>Address: <span className='text-slate-500	'>198 West 21th Street, Suite 721 New York NY 10016</span></p>
                </div>
                <div data-aos="flip-left" data-aos-duration="2000">
                    <FaPhoneAlt className='text-5xl text-center mx-auto bg-gray-400 text-white rounded-full mb-5 p-4'></FaPhoneAlt>
                    <p className='font-semibold'>Phone: <span className='text-slate-500	'>+880 1435-983766</span></p>
                </div>
                <div data-aos="flip-left" data-aos-duration="2000">
                    <FaLocationArrow className='text-5xl text-center mx-auto bg-gray-400 text-white rounded-full mb-5 p-4'></FaLocationArrow>
                    <p className='font-semibold'>Email: <span className='text-slate-500	'>ron@gmail.com</span></p>
                </div>
                <div data-aos="flip-left" data-aos-duration="2000">
                    <FaGlobeAmericas className='text-5xl text-center mx-auto bg-gray-400 text-white rounded-full mb-5 p-4'></FaGlobeAmericas>
                    <p className='font-semibold'>Website <a href="/" className='text-slate-500'>Go</a></p>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-10 p-10' data-aos="fade-right" data-aos-duration="2000">
                <div className='rounded-lg'>
                    <h2 className='text-center text-2xl font-bold mb-5'>Ask Anything</h2>
                   <form className='m-0'>
                   <div className="form-control mb-4">
                     <input type="text" placeholder="Name" className="input input-bordered bg-white text-black rounded-lg w-full" required/>
                   </div>
                   <div className="form-control mb-4">
                     <input type="email" placeholder="Email" className="input input-bordered bg-white text-black rounded-lg w-full" required/>
                   </div>
                   <div className="form-control">
                     <textarea className="textarea textarea-bordered bg-white text-black rounded-lg" placeholder="Write Your Message" required></textarea>
                   </div>
                   <input className='btn btn-outline btn-primary mt-3 text-white' type="submit" value="Send Message" />
                   </form>
                </div>
                <div className='mx-auto w-11/12 mt-8' data-aos="fade-left" data-aos-duration="2000">
                    <img className='rounded-lg' src={contact} alt="" data-aos="fade-left" data-aos-duration="2000"/>
                </div>
            </div>
        </div>
    );
};

export default Contact;