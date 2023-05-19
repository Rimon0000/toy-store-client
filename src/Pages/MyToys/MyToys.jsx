import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    const url = `http://localhost:5000/addToy?email=${user?.email}`
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[])

    const handleDelete = (id) =>{
        const proceed = confirm("Are you sure you want to Delete?")
        if(proceed){
          fetch(`http://localhost:5000/addToy/${id}`,{
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
            <h2 className='text-5xl'>Your Toys: {myToys.length}</h2>
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