import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {DropdownButton,Dropdown} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import AHeader from '../AHeader';
const AHome = () => {
    const id=localStorage.getItem('userId');
    console.log(id)
    const [user,setUser]=useState([]);
    const history=useHistory();
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/Aprofile/${id}`)
        .then(res=>{
            setUser(res.data)    
        })
    },[]);
    const handleLogout=()=>{
        localStorage.clear();
        setTimeout(() => { history.push('/Alogin'); }, 100);
    }
    return (
        <div>
            <AHeader></AHeader> 
            <div class="bgimg">
                
            <h1 id="find">Find Your Next<br/>
                Tour Destinations</h1>
            
            </div>
        </div>
    );
};

export default AHome;