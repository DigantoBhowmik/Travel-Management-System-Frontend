import React from 'react';

const Bookingevent = (props) => {
    const {id,name,price,startdate,enddate}=props.event
    console.log(name)
    return (
        <div>
            <div>
                <table class="table">
                <thead>
                    <tr>
                    
                    <th scope="col">Order Id</th>
                    <th scope="col">Event Name</th>
                    <th scope="col">Event Price</th>
                    <th scope="col">Event Start Date</th>
                    <th scope="col">Event End Date</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{price}</td>
                            <td>{startdate}</td>
                            <td>{enddate}</td>
                            
                        </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookingevent;