import React from 'react';
import AHeader from '../AHeader';
const Eventdetailsmap = (props) => {
    const {name,shortdesc,desc,price,startdate,enddate,deadline,image,agentid}=props.item
    return (
        <div>
            <AHeader></AHeader>
            <legend> Events Details </legend>
    
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
                        <tr>
                            <td>startdate:</td>
                            <td>{startdate}</td>
                        </tr>
                        <tr>
                            <td>enddate:</td>
                            <td>{enddate}</td>
                        </tr>
                        <tr>
                            <td>deadline:</td>
                            <td>{deadline}</td>
                        </tr>
                        <tr>
                            <td>agendid:</td>
                            <td>{agentid}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Eventdetailsmap;