import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Header';
import Bookpackagelist from './Bookpackagelist';

const Bookingpackagelist = () => {
    const {id}=useParams();
    const [user,setUser]=useState([]);
    console.log(user)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/book/${id}`)
        .then(res=>{
            setUser(res.data)
            console.log(res.data)
        })
    },[]);
    return (
        <div>
            <Header/>
            <div>
                {
                        user.map(users=><Bookpackagelist user={users}/>)
                }
            </div>

        </div>
    );
};

export default Bookingpackagelist;