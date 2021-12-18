import axios from 'axios';
import React, { useEffect, useState } from 'react';
import APackages from './APackages';
import AHeader from '../AHeader';
const AShowpackages = () => {
    const [packages,setPackages]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/adminpackages/list')
        .then(res=>{
            setPackages(res.data);
            console.log(res.data)})
    },[])
    
    return (
        <div>
          <AHeader></AHeader>
            <div className="row">
                
                {
                    packages.map(packag=><APackages item={packag}></APackages>)
                }
            </div>
        </div>
    );
    
};

export default AShowpackages;