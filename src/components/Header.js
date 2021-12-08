import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {DropdownButton,Dropdown} from 'react-bootstrap'

const Header = () => {
    const id=localStorage.getItem('userId');
    console.log(id)
    const [user,setUser]=useState([]);
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/profile/${id}`)
        .then(res=>{
            setUser(res.data)    
        })
    },[]);
    
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/packages">Packages</Link></li>
                        <li><a href="">Events</a></li>
                        <li><a href="">Resort</a></li>
                        <li><a href="">ShopHobe</a></li>
                        <li><a href="">RentHobe</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </nav>
                {
                    user && user.role==='agent'?
                    <DropdownButton id="dropdown-basic-button" title={user.name}>
                        <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">My Packages</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">My Events</Dropdown.Item>
                        <Dropdown.Item >Log out</Dropdown.Item>
                    </DropdownButton>
                    :
                    user && user.role==='user'?
                    <DropdownButton id="dropdown-basic-button" title={user.name}>
                        <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">My Booking</Dropdown.Item>
                        <Dropdown.Item >Log out</Dropdown.Item>
                    </DropdownButton>
                    :<ul class="nav navbar-nav">
                        <li>
                            <Link to="/login" className="btn"><span ></span>Sign in</Link>
                        </li>
                    
                     </ul>
                    
                }
                
                
            </header>
        </div>
    );
};

export default Header;