import React from 'react';

const AAgents = (props) => {
    const {id,name,email,phone,password}=props.item
    return (
            <div className="image-cards col-md-3">
               <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{name}</td>
                        </tr>
                        <tr>   
                            <td>ID:</td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td>email:</td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>phone:</td>
                            <td>{phone}</td>
                        </tr>
                        <tr>
                            <td>password:</td>
                            <td>{password}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
    );
};

export default AAgents;