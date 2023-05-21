import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysRow from './MyToysRow';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const [sortOrder, setSortOrder] = useState('');
    useTitle('MyToys')


    const url = `https://toy-server-theta.vercel.app/addToy?email=${user?.email}&sort=${sortOrder}`
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[sortOrder])

    //handle sorting
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    console.log(event.target.value)
  };

  //handle delete
    const handleDelete = (id) =>{
        const proceed = confirm("Are you sure you want to Delete?")
        if(proceed){
          fetch(`https://toy-server-theta.vercel.app/addToy/${id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
              alert("Deleted Successfully")
              const remaining = myToys.filter(myToy => myToy._id !== id)
              setMyToys(remaining)
            }
          })
        }
      }

    return (
        <div>
            <h2 className='text-5xl text-center  mb-5 font-semibold'>Your Toys: {myToys.length}</h2>
            <div className='text-end my-10'>
              <h2 className='text-1xl font-semibold'>Sort by price:</h2>
                  <select value={sortOrder} onChange={handleSortChange}>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
              </div>

            <div className="overflow-x-auto w-full">
             <table className="table w-full">
               {/* head */}
               <thead>
                 <tr>
                   <th>
                     <label>
                       <input type="checkbox" className="checkbox" />
                     </label>
                   </th>
                   <th>Image</th>
                   <th>Seller Name</th>
                   <th>Sub Category</th>
                   <th>Price</th>
                   <th>rating</th>
                   <th>Quantity</th>
                   <th>Update</th>
                   <th></th>
                 </tr>
               </thead>
               <tbody>
                {
                    myToys.map(myToy => <MyToysRow
                    key={myToy._id}
                    myToy={myToy}
                    handleDelete = {handleDelete}
                    ></MyToysRow>)
                }
               </tbody> 
             </table>
            </div>
        </div>
    );
};

export default MyToys;