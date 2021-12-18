import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Deletepackage = () => {
    const {id}=useParams();
    const history=useHistory();
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/packagedelete/${id}`)
        .then(res=>{
            console.log(res.data)
            history.push('/createpackages')
        })
    },[]);
    return (
        <div>
            
        </div>
    );
};

export default Deletepackage;