import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    const url = `https://toy-server-theta.vercel.app/addToy?email=${user?.email}`
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[])

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
                  <select>
                    <option value="" className='bg-slate-300 px-8 py-2'>Filter By Price</option>
                    <option value="Remote">Ascending</option>
                    <option  value="Onsite">Descending</option>
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