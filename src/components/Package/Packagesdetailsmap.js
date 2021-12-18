import React from 'react';
import Header from '../Header';
const Packagesdetailsmap = (props) => {
    const {name,price,shortdesc,desc}=props.item
    return (
        <div>
            <Header></Header>
            <legend> Package Details </legend>
    
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Price:</td>
                            <td>{price}</td>
                        </tr>
                        <tr>
                            <td>Short Description:</td>
                            <td>{shortdesc}</td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>{desc}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Packagesdetailsmap;