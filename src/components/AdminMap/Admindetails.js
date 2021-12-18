import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Admindetailsmap from './Admindetailsmap';

const Admindetails = () => {
    const {id}=useParams()
    const [Admin,setAdmin]=useState([])
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/admindetails/${id}`)
        .then(res=>{
            console.log(res.data);
            setAdmin(res.data)    
        })
    })
    console.log(Admin)
    return (
        <div>
            {
                <Admindetailsmap ad={Admin}></Admindetailsmap>
            }
        </div>
    );
};

export default Admindetails;