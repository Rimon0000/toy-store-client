import React, { useEffect, useState } from 'react';
import Toy from './Toy';

const BestSell = () => {
    const [toys, setToys] = useState([])
    const [showSeeAllButton, setShowSeeAllButton] = useState(true);

    useEffect(() =>{
        fetch("http://localhost:5000/bestSell")
        .then(res => res.json())
        .then(data => setToys(data.slice(0, 3)))
    },[])

    const seeAllHandler = () =>{
            fetch("http://localhost:5000/bestSell")
            .then(res => res.json())
            .then(data => setToys(data))
            setShowSeeAllButton(false)
    }

    return (
        <div className='my-10'>
            <h2 className='text-center text-4xl font-bold pt-5 px-5 pb-2'>Best Selling Toys</h2>
            <p className='text-center font-semibold mb-10 text-stone-800'>Check out our best selling toys</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 my-5 mx-auto text-center lg:mx-10 mt-5'>
                {
                    toys?.map(toy => <Toy key={toy.id} toy ={toy}></Toy>)
                }
            </div>
            <div className='text-center border-black'>
               {showSeeAllButton && (
                 <button onClick={seeAllHandler} className='btn btn-outline-primary text-center border-black'>See All Latest Toys</button>
                )}
            </div>
            
        </div>
    );
};

export default BestSell;