import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Packages from './Packages';
import AHeader from '../AHeader';
const Showpackages = () => {
    const [packages,setPackages]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/packages/list')
        .then(res=>{
            setPackages(res.data);
            console.log(res.data)})
    },[])
    
    return (
        <div>
          <AHeader></AHeader>
            <div className="row">
                
                {
                    packages.map(packag=><Packages item={packag}></Packages>)
                }
            </div>
        </div>
    );
    
};

export default Showpackages;