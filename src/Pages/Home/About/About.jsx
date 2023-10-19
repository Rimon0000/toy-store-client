import React from 'react';
import about1 from "../../../assets/about/about1.jpg"
import about2 from "../../../assets/about/about2.jpg"
import about3 from "../../../assets/about/about3.jpg"

const About = () => {
    return (
        <div>
            <div className='mx-auto text-center px-10 mt-11'>
                <h2 className='text-center text-4xl font-bold pt-5 px-5 pb-8
                '>
                    About Us
                </h2>
                <div className='lg:flex md:flex gap-10'>
                    <div className='rounded w-3/5'>
                        <div className='flex'>
                            <img className='w-2/4 rounded' src={about1} alt="" />
                            <img className='w-2/4 rounded' src={about2} alt="" />
                        </div>
                        <img className='w-3/5 relative rounded left-36 bottom-24' src={about3} alt="" />
                    </div>
                    <div className='lg:w-2/5 md:w-2/5'>
                        <h2 className='text-2xl font-bold mb-3'>Welcome to HERO'S TOWN</h2>
                        <p className='text-justify font-semibold px-2'>Welcome to our HERO'S TOWN- Where Imagination Knows No Bounds! At HERO'S TOWN, 
                        we believe that every child's laughter is a testament to the magic of play. 
                        Our mission is to inspire and nurture creativity through a carefully curated collection of toys that 
                        cater to all ages, interests, and developmental stages. <br /> <br />
                            
                        We are a passionate team of toy enthusiasts and parents who understand the profound impact that the 
                        right toys can have on a child's growth and development. We've spent countless hours 
                        researching, testing, and selecting the finest toys from around the world to provide 
                        an exceptional play experience for your little ones. Moreover, we offer a unique opportunity for toy 
                        sellers to connect with a wide audience through our platform.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;