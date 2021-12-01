import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                <ul class="nav navbar-nav">
                    <li><Link to="/register" className="link"><span ></span>Sign in</Link></li>
                </ul>
                
            </header>
        </div>
    );
};

export default Header;