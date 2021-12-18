import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Eventdetailsmap from './Eventdetailsmap';

const Eventdetails = () => {
    const {id}=useParams()
    const [events,setEvents]=useState([])
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/eventdetails/${id}`)
        .then(res=>{
            console.log(res.data);
            setEvents(res.data)    
        })
    })
    console.log(events)
    return (
        <div>
            {
                <Eventdetailsmap item={events}></Eventdetailsmap>
            }
        </div>
    );
};

export default Eventdetails;