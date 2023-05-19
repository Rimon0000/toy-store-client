import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys, setmyToys] = useState([])

    const url = `http://localhost:5000/addToy?email=${user?.email}`
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setmyToys(data))
    },[])

    return (
        <div>
            <h2 className='text-5xl'>Your Toys: {myToys.length}</h2>
        </div>
    );
};

export default MyToys;