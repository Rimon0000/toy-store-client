import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    useTitle('AllToys')

    useEffect( () =>{
        fetch('https://toy-server-theta.vercel.app/allToy')
        .then(res => res.json())
        .then(data => setAllToys(data))
    }, [])
 
  
    //search
    const handleSearch = () => {
      const results = allToys.filter(toy => toy.name.toLowerCase().includes(searchQuery.toLowerCase()));
      setAllToys(results);
    };

    return (
      <>
      <div className='flex gap-2'>
         <div className="form-control w-1/4">
         <input value={searchQuery}
         onChange={event => setSearchQuery(event.target.value)} type="text" placeholder="Search" className="input input-bordered" />
         </div>
         <div>
         <button className='btn btn-primary' onClick={handleSearch}>Search</button>
         </div>
         <div>
          {allToys.length > 0 ? "" : <p>No results found.</p>}
         </div>
      </div>

        <div>
            <h2 className='text-5xl text-center m-5 pb-4'>Explore All Toys</h2>
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
        </>
    );
};

export default AllToys;