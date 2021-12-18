import React from 'react';

const Bookingpackage = (props) => {
    const {id,name,price,date}=props.package
    
    return (
        <div>
            <table class="table">
            <thead>
                <tr>
                
                <th scope="col">Order Id</th>
                <th scope="col">Package Name</th>
                <th scope="col">Package Price</th>
                <th scope="col">Start Date</th>
                </tr>
            </thead>
            <tbody>
                
                    <tr>
                        
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{date}</td>
                    </tr>
                    
            </tbody>
            </table>
        </div>
    );
};

export default Bookingpackage;