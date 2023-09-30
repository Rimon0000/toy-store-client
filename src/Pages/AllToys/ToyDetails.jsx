import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ToyDetails = () => {
    const toy = useLoaderData()
    const {_id, name, photo, seller, email, subcategory, price, rating, quantity, description} = toy
    useTitle('ToyDetails')

    return (

        <div className='grid lg:grid-cols-2 gap-5 my-10 p-10 bg-base-100 shadow-xl'>
          <div>
          <figure><img src={photo} alt="Shoes" className='rounded-lg' /></figure>
          </div>
          <div className="card-body">
            <h2 className="card-title text-2xl">Name: {name}</h2>
            <div className=''>
            <p className='py-1 font-bold'>Seller Name: <span className='font-semibold'>{seller}</span></p>
            <p className='py-1 font-bold'>Seller Email: <span className='font-semibold'>{email}</span></p>
            <p className='py-1 font-bold'>price: <span className='font-semibold'>{price}</span></p>
            <p className='py-1 font-bold'>Rating: <span className='font-semibold'>{ rating}</span></p>
            <p className='py-1 font-bold'>Available Quantity: <span className='font-semibold'>{ rating}</span></p>
            <p className='py-1 font-bold'>Description: <span className='font-semibold'>{description}</span></p>
            </div>
          </div>
        </div>
    );
};

export default ToyDetails;