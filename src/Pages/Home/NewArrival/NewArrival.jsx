import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/newArrival/img1.jpg"
import img2 from "../../../assets/newArrival/img2.jpg"
import img3 from "../../../assets/newArrival/img3.jpg"
import img5 from "../../../assets/newArrival/img5.jpg"
import img6 from "../../../assets/newArrival/img6.jpg"
import img8 from "../../../assets/newArrival/img8.jpg"
import img9 from "../../../assets/newArrival/img9.jpg"
import img10 from "../../../assets/newArrival/img10.jpg"
import img11 from "../../../assets/newArrival/img11.jpg"
import img12 from "../../../assets/newArrival/img12.jpg"
import img14 from "../../../assets/newArrival/img14.jpg"

const NewArrival = () => {
    return (
        <div className='my-7'>
            <h2 className='text-center text-4xl font-bold pt-5 px-5 pb-2'>New Arrivals</h2>
            <p className='text-center font-semibold mb-10 text-stone-800'>Check out the latest</p>
            <div className='d-flex'>
              <Marquee className='text-danger' speed={100}>
              <div className="card w-96 bg-base-100 shadow-xl">
  <                   figure><img src={img1} alt="Shoes" /></figure>
  <                   div className="mt-3">
                       <h2 className="text-center font-bold">Splash</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
  <                   figure><img src={img2} alt="Shoes" /></figure>
  <                   div className="mt-3">
                       <h2 className="text-center font-bold">Scarlet Witch</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
  <                   figure><img src={img3} alt="Shoes" /></figure>
  <                   div className="mt-3">
                       <h2 className="text-center font-bold">Avengers 4</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
  <                   figure><img src={img5} alt="Shoes" /></figure>
  <                   div className="mt-3">
                       <h2 className="text-center font-bold">Hulk</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
  <                   figure><img src={img6} alt="Shoes" /></figure>
  <                   div className="mt-3">
                       <h2 className="text-center font-bold">Black Panther</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
  <                   figure><img src={img8} alt="Shoes" /></figure>
  <                   div className="mt-3">
                       <h2 className="text-center font-bold">Batman and Spiderman</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
  <                   figure><img src={img9} alt="Shoes" /></figure>
  <                   div className="mt-3">
                       <h2 className="text-center font-bold">Luke Cage</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
  <                   figure><img src={img10} alt="Shoes" /></figure>
  <                   div className="mt-3">
                       <h2 className="text-center font-bold">Black Widow</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
  <                   figure><img src={img11} alt="Shoes" /></figure>
  <                   div className="mt-3">
                       <h2 className="text-center font-bold">Green Lantern</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
  <                   figure><img src={img12} alt="Shoes" /></figure>
  <                   div className="mt-3">
                       <h2 className="text-center font-bold">Superman</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-14">
  <                   figure><img src={img14} alt="Shoes" /></figure>
  <                   div className="mt-3">
                       <h2 className="text-center font-bold">Doctor strange</h2>
                      </div>
                </div>
              </Marquee>
            </div> 
        </div>
    );
};

export default NewArrival;