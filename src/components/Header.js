import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {DropdownButton,Dropdown} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const Header = () => {
    const id=localStorage.getItem('userId');
    console.log(id)
    const [user,setUser]=useState([]);
    const history=useHistory();
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/profile/${id}`)
        .then(res=>{
            setUser(res.data)    
        })
    },[]);
    const handleLogout=()=>{
        localStorage.clear();
        setTimeout(() => { history.push('/login'); }, 100);
    }
    return (
        <div>
            
            <section>
                <div className="Topbar">
                <div className="top">
                    <p>We’re here to provide 24/7 at your service</p>
                </div>
                <div className="top">
                    <p><i className="fas fa-phone-alt"></i>01767145146 <i className="far fa-envelope"></i> ghuraghuri@gmail.com</p>
                </div>
                </div>
            </section>
            <header>
                <nav className=""  >
                    <ul className="nav-bar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/packages">Packages</Link></li>
                        <li><Link to="">Events</Link></li>
                        <li><Link to="">Resort</Link></li>
                        <li><Link to="">ShopHobe</Link></li>
                        <li><Link to="">RentHobe</Link></li>
                        <li><Link to="">Contact Us</Link></li>
                    </ul>
                </nav>
                {
                    user && user.role==='agent'?
                    <DropdownButton id="dropdown-basic-button" title={user.name}>
                        <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">My Packages</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">My Events</Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout} >Log out</Dropdown.Item>
                    </DropdownButton>
                    :
                    user && user.role==='user'?
                    <DropdownButton id="dropdown-basic-button" title={user.name}>
                        <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
                        <Dropdown.Item href="/mybooking">My Booking</Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                    </DropdownButton>
                    :<ul className="nav navbar-nav">
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