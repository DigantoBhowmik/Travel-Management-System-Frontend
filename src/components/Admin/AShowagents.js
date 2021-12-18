import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AAgents from './AAgents';
import AHeader from '../AHeader';

const AShowagents = () => {
    const [events,setEvents]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/agents/list')
        .then(res=>{
            setEvents(res.data);
            console.log(res.data)})
    },[])
    
    return (
        <div>
            <AHeader></AHeader>
            <div className="row">   
                {
                    events.map(event=><AAgents item={event}></AAgents>)
                }
            </div>
        </div>
    );
    
};

export default AShowagents;