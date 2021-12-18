import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {DropdownButton,Dropdown} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const AHeader = () => {
    const id=localStorage.getItem('adminId');
    console.log(id)
    const [user,setUser]=useState([]);
    const history=useHistory();
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/Aprofile/${id}`)
        .then(res=>{
            setUser(res.data)    
        })
    },[]);
    const handleLogout=()=>{
        localStorage.clear();
        setTimeout(() => { history.push('/Alogin'); }, 100);
    }
    return (
        <div>
            
            <section>
                <div class="Topbar">
                <div class="top">
                    <p>We’re here to provide 24/7 at your service</p>
                </div>
                <div class="top">
                    <p><i class="fas fa-phone-alt"></i>01767145146 <i class="far fa-envelope"></i> ghuraghuri@gmail.com</p>
                </div>
                </div>
            </section>
            <header>
                <nav className=""  >
                    <ul class="nav-bar">
                        <li><Link to="/admindash">Home</Link></li>
                        <li><Link to="/admins">Admins</Link></li>
                        <li><Link to="/packages">Packages</Link></li>
                        <li><Link to="">Events</Link></li>
                        <li><Link to="">Agents</Link></li>
                        <li><Link to="">Users</Link></li>
                        
                    </ul>
                </nav>
                {
                   <ul class="nav navbar-nav">
                   <li>
                       <Link to="/Alogin" className="btn"><span ></span>Sign in</Link>
                   </li>
               
                </ul>
                }
                
                
            </header>
        </div>
    );
};

export default AHeader;