import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';



const SubCategory = ({toy}) => {
    const {_id, name, photo, price, rating} = toy
    const {user} = useContext(AuthContext)
    const [redirectToLogin, setRedirectToLogin] = useState(false);


    const detailsHandler =  () =>{
      if (!user) {
        confirm('You have to log in first to go View Details');
        setRedirectToLogin(true);
      }
      else{
      <Link to={`/allToys/${_id}`}></Link>
    }}

    if (redirectToLogin) {
      return <Navigate to="/login"></Navigate>;
    }

    return (
        <div className="card card-compact mx-auto w-96 bg-base-100 shadow-xl px-5">
          <figure><img src={photo} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Name: {name}</h2>
            <div className='font-semibold'>
            <p className='py-1'>price: {price}</p>
            <p className='py-1 pb-2'>Rating: { rating}</p>
            <Link to={`/allToys/${_id}`}>
            <button onClick={detailsHandler} className="btn btn-outline">View Details</button>
             </Link>
            </div>
          </div>
        </div>
    );
};

export default SubCategory;