import React from 'react';
import login from "../../assets/login/login.jpg"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2">
            <img className='w-3/4' src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
              <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" name="password" className="input input-bordered" />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="Login" />
                  </div>
              </form>
              <p className="my-4 text-center">New to Hero's Town? <Link className="text-orange-600 font-bold" to="/registration">Sign Up</Link></p>
            </div>
          </div>
        </div>
    </div>
    );
};

export default Login;