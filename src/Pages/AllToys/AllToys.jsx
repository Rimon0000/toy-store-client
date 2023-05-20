import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';

const AllToys = () => {
    const [allToys, setAllToys] = useState([])

    useEffect( () =>{
        fetch('http://localhost:5000/allToy')
        .then(res => res.json())
        .then(data => setAllToys(data))
    }, [])

    return (
        <div>
            <h2 className='text-5xl text-center m-5 pb-4'>All Toys</h2>
            <div className="overflow-x-auto w-full">
             <table className="table w-full">
               {/* head */}
               <thead>
                 <tr>
                   <th>Seller Name</th>
                   <th>Toy Name</th>
                   <th>Sub Category</th>
                   <th>Price</th>
                   <th>Quantity</th>
                   <th>View Details</th>
                 </tr>
               </thead>
               <tbody>
                {
                    allToys.map(allToy => <AllToysRow
                    key={allToy._id}
                    allToy={allToy}
                    ></AllToysRow>)
                }
               </tbody> 
             </table>
            </div>
        </div>
    );
};

export default AllToys;