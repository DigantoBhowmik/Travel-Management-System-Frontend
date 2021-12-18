import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AEvents from './AEvents';
import AHeader from '../AHeader';

const AShowpevents = () => {
    const [events,setEvents]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/events/list')
        .then(res=>{
            setEvents(res.data);
            console.log(res.data)})
    },[])
    
    return (
        <div>
           <AHeader></AHeader>
            <div className="row">   
                {
                    events.map(event=><AEvents item={event}></AEvents>)
                }
            </div>
        </div>
    );
    
};

export default AShowpevents;