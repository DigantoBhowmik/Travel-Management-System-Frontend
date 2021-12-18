import React, { useState,useEffect } from 'react';
import Events from './Events';
import axios from 'axios';
import Header from '../Header';
const EventView = () => {
    const [events,setEvents]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/events')
        .then(res=>{
            setEvents(res.data);
            console.log(res.data)})
    },[])
    
    return (
            <div className="row">
                <div className="title">
                    <Header/>
                    <h2><center>Events</center></h2>
                </div>
                {
                    events.map(event=><Events item={event}></Events>)
                }
            </div>
    );
};

export default EventView;