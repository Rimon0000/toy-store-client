import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ToyDetails = () => {
    const toy = useLoaderData()
    const {_id, name, photo, seller, email, subcategory, price, rating, quantity, description} = toy
    useTitle('ToyDetails')

    return (

          <div className="card card-compact mx-auto w-96 bg-base-100 shadow-xl">
          <figure><img src={photo} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Name: {name}</h2>
            <div className='font-semibold'>
            <p className='py-1'>Seller Name: {seller}</p>
            <p className='py-1'>Seller Email: {email}</p>
            <p className='py-1'>price: {price}</p>
            <p className='py-1'>Rating: { rating}</p>
            <p className='py-1'>Available Quantity: {quantity}</p>
            <p className='py-1'>Description: {description}</p>
            </div>
          </div>
          </div>
    );
};

export default ToyDetails;