import React from 'react';
import { Link } from 'react-router-dom';

const Showcreatepackagemap = (props) => {
    const {id,name,price,shortdesc,desc}=props.package
    console.log(props.packages)

    return (
        <div>
            <table class="table">
            <thead>
                <tr>
                
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Short Description</th>
                <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                
                    <tr>
                        
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{shortdesc}</td>
                        <td>{desc}</td>
                        <td><Link to={"/book/"+id}>Booking Details</Link></td>
                        <td><Link to={"/editpackage/"+id}>Edit</Link></td>
                        <td><Link to={"/packagedelete/"+id}>Delete</Link></td>
                    </tr>
                    
            </tbody>
            </table>
        </div>
    );
};

export default Showcreatepackagemap;