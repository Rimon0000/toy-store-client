import React from 'react';
import { Link } from 'react-router-dom';
import signUp from "../../assets/login/registration.jpg"

const Registration = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            <img className='w-3/4' src={signUp} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
              <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="text" placeholder="confirm password" name="password" className="input input-bordered" />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="SignUp" />
                  </div>
              </form>
              <p className="my-4 text-center">Already Have an Account? <Link className="text-orange-600 font-bold" to="/login">Login</Link></p>
            </div>
          </div>
        </div>
    </div>
    );
};

export default Registration;