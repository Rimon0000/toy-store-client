import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const UpdateToy = () => {
    const {user} = useContext(AuthContext)
    const toy = useLoaderData()
    const {_id, name, photo, seller, email, subcategory, price, rating, quantity, description} = toy
    useTitle('Update Toy')


    const handleUpdateToy = (event) =>{
        event.preventDefault()
        const form = event.target 
        const price = form.price.value
        const quantity = form.quantity.value
        const description = form.description.value

        const updateToy = {price, quantity, description}
        console.log(updateToy)

        //send data to the server
        fetch(`https://toy-server-theta.vercel.app/addToy/${_id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updateToy)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'Success!',
              text: '   Toy Updated successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })
    }

    return (
        <div>
            <h2 className="text-center font-bold text-4xl m-5">Update Toy</h2>
              <form onSubmit={handleUpdateToy}>
                <div className=" w-1/2 mx-auto">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input type="text" name="price" defaultValue={price} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Detail Description</span>
                  </label>
                  <input type="text" name="description" defaultValue={description} className="input input-bordered" />
                </div>
                </div>
                <div className="form-control m-5">
                  <input className="btn w-1/2 mx-auto" type="submit" value="Update Toy" />
                </div>
              </form>
        </div>
    );
};

export default UpdateToy;