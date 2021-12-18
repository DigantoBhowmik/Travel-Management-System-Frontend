import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import EventdetailsView from "./EventdetailsView";

const Eventdetails = () => {
    const {id}=useParams();
    const [events,setEvent]=useState([])
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/eventdetails/${id}`)
        .then(res=>{
            console.log(res.data);
            setEvent(res.data)
        })
    })
    console.log(events)
    return (
        <div>
            <EventdetailsView item={events}/>
        </div>
    );
};

export default Eventdetails;