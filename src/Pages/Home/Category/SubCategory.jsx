import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaStar } from 'react-icons/fa';



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
        <div className="card card-compact mx-auto w-96 bg-base-100 shadow-xl mt-4">
          <figure><img src={photo} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Name: {name}</h2>
            <div className='font-semibold'>
            <div className="flex justify-between items-center">
              <div>
              <h2 className="text-base font-semibold">Price: {price}</h2>
              </div>
              <div className="flex items-center gap-1">
                <p><FaStar/></p>
                <p>{rating}</p>
              </div>
            </div>
            <Link to={`/allToys/${_id}`}>
            <button onClick={detailsHandler} className="btn btn-outline mt-3">View Details</button>
             </Link>
            </div>
          </div>
        </div>
    );
};

export default SubCategory;