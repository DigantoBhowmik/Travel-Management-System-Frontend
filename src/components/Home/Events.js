import React from 'react';

const Events = (props) => {
    const {name,price,shortdesc,img}=props.item
    return (
            <div className="image-cards col-md-3">
                <div className="image-card">
                    <div className="image-card-banner">
                        <img src= {img} alt=""/>
                    </div>
                    <div className="card-details">
                        <h1><b>{name}</b></h1>
                        <p className="cards-p"><i className="fas fa-bolt"></i>
                        From <span id="price"> {price}</span> taka
                    </p>
                    <p><i className="fas fa-clock"></i>Duration :{shortdesc}</p>
                    </div>
                </div>
            </div>
    );
};

export default Events;