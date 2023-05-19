import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
    const {user} = useContext(AuthContext)
    const toy = useLoaderData()
    const {_id, name, photo, seller, email, subcategory, price, rating, quantity, description} = toy


    const handleUpdateToy = (event) =>{
        event.preventDefault()
        const form = event.target 
        const name = form.name.value
        const photo = form.photo.value
        const seller = form.seller.value
        const email = form.email.value
        const subcategory = form.subcategory.value
        const price = form.price.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const description = form.description.value

        const updateToy = {name, photo, seller, email, subcategory, price, rating, quantity, description}
        console.log(updateToy)

        //send data to the server
        fetch(`http://localhost:5000/addToy/${_id}`,{
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
            <h2 className="text-center font-semibold text-4xl m-5 pb-4">Update Toy</h2>
              <form onSubmit={handleUpdateToy}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" defaultValue={name} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" name="photo" defaultValue={photo} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Name</span>
                  </label>
                  <input type="text" name="seller" defaultValue={seller} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sub Category</span>
                  </label>
                  <input type="text" name="subcategory" defaultValue={subcategory} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input type="text" name="price" defaultValue={price} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input type="text" name="rating" defaultValue={rating} className="input input-bordered" />
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
                <div className="form-control mt-6">
                  <input className="btn btn-block" type="submit" value="Update Toy" />
                </div>
              </form>
        </div>
    );
};

export default UpdateToy;