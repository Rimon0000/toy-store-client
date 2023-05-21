import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const AllToysRow = ({allToy}) => {
    const {_id, name, photo, seller, email, subcategory, price, rating, quantity, description} = allToy
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
        <tr>
        <td>
          {seller}
        </td>
        <td>{name}</td>
        <td>{subcategory}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <th>
        <Link to={`/allToys/${_id}`}>
        <button onClick={detailsHandler} className="btn btn-outline">View Details</button>
         </Link>
        </th>
      </tr>
    );
};

export default AllToysRow;