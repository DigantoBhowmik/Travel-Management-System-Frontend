import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Packagedetailsmap from './Packagedetailsmap';
import AHeader from '../AHeader';

const Packagedetails = () => {
    const {id}=useParams()
    const [Package,setPackage]=useState([])
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/adminpackagedetails/${id}`)
        .then(res=>{
            console.log(res.data);
            setPackage(res.data)    
        })
    })
    console.log(Package)
    return (
        <div>
           
            {
                <Packagedetailsmap item={Package}></Packagedetailsmap>
            }
        </div>
    );
};

export default Packagedetails;