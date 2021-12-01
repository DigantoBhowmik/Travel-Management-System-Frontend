import React from 'react';
import { Link } from 'react-router-dom';

const packages = (props) => {
    const {id,name,price,shortdesc,image}=props.item
    return (
        
            <div className="image-cards col-md-3">
                <Link to={"/packagedetails/"+id}>
                <div className="image-card">
                    <div className="image-card-banner">
                        <img src= {image} alt=""/>
                    </div>
                    <div className="card-details">
                        <h1><b>{name}</b></h1>
                        <p className="cards-p"><i className="fas fa-bolt"></i>
                        From <span id="price"> {price}</span> taka
                    </p>
                    <p><i className="fas fa-clock"></i>Duration :{shortdesc}</p>
                    </div>
                </div>
                </Link>
            </div>
        
        
    );
};

export default packages;