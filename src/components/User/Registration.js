import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })
    const handleChange=(e)=>{
        const newUser={...user};
        newUser[e.target.name]= e.target.value
        setUser(newUser);
    }
    const handleSubmit=(e)=>{
        
        console.log(user)
        axios.post('http://127.0.0.1:8000/api/register',user)
        .then(resp=>{
            console.log(resp.data);
        }).catch(err=>{
          console.log(err);
        });
        e.preventDefault();
    }
    return (
        <div className="register_page">
        <div className="register_body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Full Name :</label>
                <input type="text" name="name" className="form-control" id="formGroupExampleInput" onChange={handleChange}/>

              </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Email :</label>
                <input type="text" name="email" className="form-control" id="formGroupExampleInput" onChange={handleChange}/>
                
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Phone :</label>
                <input type="text" name="phone" className="form-control" id="formGroupExampleInput" onChange={handleChange}/>
                
              </div>

              <div className="mb-3" style={{marginTop: "20px"}}>
                <label for="formGroupExampleInput2" className="form-label">Password :</label>
                <input type="password" name="password" className="form-control" id="formGroupExampleInput2" onChange={handleChange}/>
                
              </div>
              <div className="mb-3" style={{marginTop: "20px"}}>
                <label for="formGroupExampleInput2" className="form-label">Confirm Password :</label>
                <input type="password" name="Confirm_Password" className="form-control" id="formGroupExampleInput2" onChange={handleChange}/>
                
              </div>
              <input type="submit" name="submit" value="REGISTER" className="btn btn-primary login_button"/>
              <div className="swap_between_login_register">
                <p>Already have an account?</p>
                <u> <Link to="/login"> Sign in here</Link></u>
            </div>
          </form>  
        </div>
        
    </div>
    );
};

export default Registration;
