import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.jpg"
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

   //sign out
   const handleLogOut = () =>{
    logOut()
    .then( () =>{
    })
    .catch(error =>{
        console.log(error)
    })
}

  const navItems = <>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/myToys">My Toys</Link></li>
  <li><Link to="/allToys">All Toys</Link></li>
  <li><Link to="/addToys">Add A Toy</Link></li>
  {/* <li><Link to="/blog">Blogs</Link></li> */}


   { user ?
   <>
   <li onClick={handleLogOut}><button>Log out</button></li> 
   
   </> :
   <li><Link to="/login">Login</Link></li> 
   }
   </>

  return (
    <div className="navbar bg-base-100 h-24 mb-3">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {navItems}
              </ul>
            </div>
            <Link to="/" className="mr-3">
              <img className='w-15 h-14 rounded-lg' src={logo} alt="" />
            </Link>
            <h3 className='font-bold'>HEROS-TOWN</h3>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems}
            </ul>
          </div>
          {user && <div className="">
            <div className="w-24 rounded-full">
              <img  src={user?.photoURL} />
            </div>
            </div>}
       </div>
  );
};

export default Navbar;