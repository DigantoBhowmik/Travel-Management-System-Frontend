import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Packages from '../Package/Packages';
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
        <div>
            <Header></Header>
            
            <div className="row">
                
                {
                    packages.map(packag=><Packages item={packag}></Packages>)
                }
            </div>
        </div>
    );
    
};

export default Showpackages;