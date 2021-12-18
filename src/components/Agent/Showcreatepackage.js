import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Showcreatepackagemap from './Showcreatepackagemap';

const Showcreatepackage = () => {
    const id=localStorage.getItem('userId');
    const [packages,setPackages]=useState([]);
    console.log(packages)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/createpackages/${id}`)
        .then(res=>{
            console.log(res.data)
            setPackages(res.data)    
        })
    },[]);
        return (
        <div>
            {
                packages.map(pack=><Showcreatepackagemap package={pack}/>)
            }
        </div>
    );
};

export default Showcreatepackage;