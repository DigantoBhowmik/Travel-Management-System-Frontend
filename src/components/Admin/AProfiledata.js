import axios from 'axios';
import React, {useEffect, useState} from 'react';
import AProfile from './AProfile';

const AProfiledata = () => {
    const id=localStorage.getItem('userId');
    const [user,setUser]=useState([]);
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/Aprofile/${id}`)
        .then(res=>{
            setUser(res.data)    
        })
    },[]);
    return (
        <div>
            {
                <AProfile user={user}></AProfile>
            }
        </div>
    );
};

export default AProfiledata;