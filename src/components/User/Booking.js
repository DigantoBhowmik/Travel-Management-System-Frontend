import axios from 'axios';
import Header from '../Header';
import React, {useEffect, useState} from 'react';
import Bookingpackage from './Bookingpackage';
import Bookingevent from './Bookingevent';

const Booking = () => {
    const id=localStorage.getItem('userId');
    const [packages,setPackages]=useState([]);
    const [events,setEvents]=useState([]);
    console.log(packages)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/mybookingPackage/${id}`)
        .then(res=>{
            console.log(res.data)
            setPackages(res.data)    
        })
    },[]);
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/mybookingEvent/${id}`)
        .then(res=>{
            console.log(res.data)
            setEvents(res.data)    
        })
    },[]);
    return (
        <div>
            <Header></Header>
            <div>
                <h1>Packages Booked By You</h1>
                {
                        packages.map(pack=><Bookingpackage package={pack}></Bookingpackage>)
                }
            </div>

            <div>
                <h1>Events Booked By You</h1>
                {
                    events.map(event=><Bookingevent event={event}></Bookingevent>)
                }
            </div>
            
            
        </div>
    );
};

export default Booking;
