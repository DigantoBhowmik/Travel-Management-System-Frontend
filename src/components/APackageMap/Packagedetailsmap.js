import React from 'react';
import AHeader from '../AHeader';
const Packagedetailsmap = (props) => {
    const {name,price,shortdesc,desc}=props.item
    return (
        <div>
            <AHeader></AHeader>
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

export default Packagedetailsmap;