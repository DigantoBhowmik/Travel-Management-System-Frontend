import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Editpackage from './Editpackage';

const Editpackagemap = () => {
    const {id}=useParams();
    const [packages,setPackages]=useState([]);
    console.log(packages)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/editpackage/${id}`)
        .then(res=>{
            setPackages(res.data)
            console.log(res.data)
        })
    },[]);
    return (
        <div>
            <Editpackage packages={packages}/>
        </div>
    );
};

export default Editpackagemap;