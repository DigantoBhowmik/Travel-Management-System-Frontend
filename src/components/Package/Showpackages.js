import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Packages from './Packages';
import Header from '../Header';
const Showpackages = () => {
    const [packages,setPackages]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/packages')
        .then(res=>{
            setPackages(res.data);
            console.log(res.data)})
    },[])
    
    return (
          <div className="row">
                <div className="title">
                    <Header/>
                    <h2><center>Packages</center></h2>
                    </div>
                {
                    packages.map(packag=><Packages item={packag}></Packages>)
                }
            </div>
    );
    
};

export default Showpackages;