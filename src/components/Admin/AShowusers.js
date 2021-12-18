import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AUsers from './AUsers';
import AHeader from '../AHeader';
import { Link } from 'react-router-dom';


const AShowusers = () => {
    const [events,setEvents]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/users/list')
        .then(res=>{
            setEvents(res.data);
            console.log(res.data)})
    },[])
    
    return (

        <div>
           <AHeader></AHeader> 
           
           
            <div className="row">   
                {
                    events.map(event=><AUsers item={event}></AUsers>)
                }
            </div>
        </div>
    );
    
};

export default AShowusers;