import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({allToy}) => {
    const {_id, name, photo, seller, email, subcategory, price, rating, quantity, description} = allToy
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
        <Link to={`/updateToy/${_id}`}> <button className="btn">Details</button></Link>
        </th>
      </tr>
    );
};

export default AllToysRow;