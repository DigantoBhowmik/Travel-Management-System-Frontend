import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header';
const Packagesdetailsmap = (props) => {
    const {id,name,price,shortdesc,desc}=props.item
    const [order,setOrder]=useState({
        packageId:"",
        userId:"",
        date:""
    });
    const [message,setMessage]=useState("")
    order.packageId=id;
    order.userId=localStorage.getItem('userId')
    
    const handleChange=(e)=>{
        const newUser={...order};
        newUser[e.target.name]= e.target.value
        setOrder(newUser);
    }
    const handleSubmit=(e)=>{
        console.log(order)
        axios.post('http://127.0.0.1:8000/api/packagedetails',order)
        .then(resp=>{
            setMessage(resp.data.message)
        }).catch(err=>{
            console.log(err)
          setMessage("Enter your tour date")
        });
        e.preventDefault();
    }
    console.log(order)
    return (
        <div>
            { (message)?<div class="alert alert-success" style={{"marginTop": "20px"}}>{message}</div>:""}

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
            <form onSubmit={handleSubmit}>
                <div class="mb-3" >
                    <label for="formGroupExampleInput" class="form-label" style={{"marginTop": "20px"}}>Date </label>
                    <input type="date" name="date" class="form-control" id="formGroupExampleInput" onChange={handleChange}/>
                </div>
                <input type="submit" name="submit" value="Confirm order" className="btn btn-primary login_button"/>
            </form>
           
        </div>
    );
};

export default Packagesdetailsmap;