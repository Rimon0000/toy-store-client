import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Providers/AuthProvider';


const AddToy = () => {
    const {user} = useContext(AuthContext)

    const handleAddToy = (event) =>{
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

        const newToy = {name, photo, seller, email, subcategory, price, rating, quantity, description}
        console.log(newToy)

        //send data to the server 
        fetch('http://localhost:5000/addToy',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    return (
        <div>
            <h2 className="text-center font-semibold text-4xl m-5 pb-4">Add a Toy</h2>
              <form onSubmit={handleAddToy}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Toy Name</span>
                  </label>
                  <input type="text" name="name" placeholder="Toy Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Name</span>
                  </label>
                  <input type="text" name="seller" defaultValue={user?.displayName} className="input input-bordered" />
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
                  <input type="text" name="subcategory" placeholder='Sub Category' className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input type="text" name="price" placeholder='Price' className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input type="text" name="rating" placeholder='Rating' className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input type="text" name="quantity" placeholder='Available Quantity' className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Detail Description</span>
                  </label>
                  <input type="text" name="description" placeholder='Detail Description' className="input input-bordered" />
                </div>
                </div>
                <div className="form-control mt-6">
                  <input className="btn btn-block" type="submit" value="Add Toy" />
                </div>
              </form>
        </div>
    );
};

export default AddToy;