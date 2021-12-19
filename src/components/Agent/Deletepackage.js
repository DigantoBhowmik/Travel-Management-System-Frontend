import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Deletepackagemap from './Deletepackagemap';

const Deletepackage = () => {
    const {id}=useParams();
    const [packages,setPackages]=useState([]);
    console.log(packages)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/packagedelete/${id}`)
        .then(res=>{
            setPackages(res.data)
            console.log(res.data)
        })
    },[]);
    return (
        <div>
            <Deletepackagemap packages={packages}/>
        </div>
    );
};

export default Deletepackage;