import React from 'react';

const Bookpackagelist = (props) => {
    const {id,name,email,phone}=props.user
    return (
        <div>
        <table className="table">
        <thead>
            <tr>
            
            <th scope="col">Order Id</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Customer Email</th>
            <th scope="col">Customer Phone</th>
            </tr>
        </thead>
        <tbody>
            
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                </tr>
                
        </tbody>
        </table>
    </div>
    );
}

export default Bookpackagelist;