import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Profile from './Profile';

const Profiledata = () => {
    const id=localStorage.getItem('userId');
    const [user,setUser]=useState([]);
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/profile/${id}`)
        .then(res=>{
            setUser(res.data)    
        })
    },[]);
    return (
        <div>
            {
                <Profile user={user}></Profile>
            }
        </div>
    );
};

export default Profiledata;