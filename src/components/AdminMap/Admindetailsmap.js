
import React from 'react';
import AHeader from '../AHeader';
const Admindetailsmap = (props) => {
    const {name,email,phone}=props.ad
    return (
        <div>
            <AHeader></AHeader>
            <legend> Admin Details </legend>
    
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admindetailsmap;