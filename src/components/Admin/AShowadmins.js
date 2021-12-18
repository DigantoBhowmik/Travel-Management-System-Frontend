import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Admins from './Admins';
import AHeader from '../AHeader';
import { Link } from 'react-router-dom';

const AShowadmins = () => {
    const [admins,setAdmins]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/admins/list')
        .then(res=>{
            setAdmins(res.data);
            console.log(res.data)})
    },[])
    
    return (
        
        <div>
            <AHeader></AHeader>
            <Link to="/admincreate"><h4><b>Create An Admin</b></h4></Link>
            
            <div className="row">
            
                { 
                    admins.map(admin=><Admins ad={admin}></Admins>)
                }
            </div>
        </div>
    );
    
};

export default AShowadmins;