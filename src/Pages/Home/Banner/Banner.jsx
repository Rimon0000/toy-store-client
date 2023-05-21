import React from 'react';
import banner1 from "../../../assets/banner/banner1.jpg"
import banner2 from "../../../assets/banner/banner2.jpg"
import banner3 from "../../../assets/banner/banner3.jpg"
import banner4 from "../../../assets/banner/banner4.jpg"
import useTitle from '../../../hooks/useTitle';

const Banner = () => {
    return (
        <div>
            <div className="carousel h-[500px]">
               <div id="item1" className="carousel-item relative w-full">
                 <img src={banner1} className="w-full rounded-xl" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-7 pl-12 w-1/2">
                  <h2 className="text-6xl font-semibold">Capture your Child's best Moments</h2>
                  <p>Welcome to the Heros, where imagination knows no bounds and the possibilities for fun are endless!</p>
                  <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  </div>
                  </div>
                </div>
               </div> 
               <div id="item2" className="carousel-item relative w-full">
                 <img src={banner2} className="w-full rounded-xl" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-7 pl-12 w-1/2">
                  <h2 className="text-6xl font-semibold">Capture your Child's best Moments</h2>
                  <p>Welcome to the Heros, where imagination knows no bounds and the possibilities for fun are endless!</p>
                  <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  </div>
                  </div>
                </div>
               </div> 
               <div id="item3" className="carousel-item relative w-full">
                 <img src={banner3} className="w-full rounded-xl" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-7 pl-12 w-1/2">
                  <h2 className="text-6xl font-semibold">Capture your Child's best Moments</h2>
                  <p>Welcome to the Heros, where imagination knows no bounds and the possibilities for fun are endless!</p>
                  <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  </div>
                  </div>
                </div>
               </div> 
               <div id="item4" className="carousel-item relative w-full">
                 <img src={banner4} className="w-full rounded-xl" />
                 <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                  <div className="text-white space-y-7 pl-12 w-1/2">
                  <h2 className="text-6xl font-semibold">Capture your Child's best Moments</h2>
                  <p>Welcome to the Heros, where imagination knows no bounds and the possibilities for fun are endless!</p>
                  <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  </div>
                  </div>
                </div>
               </div>
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
                  <a href="#item1" className="btn btn-xs">1</a> 
                  <a href="#item2" className="btn btn-xs">2</a> 
                  <a href="#item3" className="btn btn-xs">3</a> 
                  <a href="#item4" className="btn btn-xs">4</a>
            </div>   
        </div>
    );
};

export default Banner;