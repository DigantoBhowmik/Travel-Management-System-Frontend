import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import A2Header from '../A2Header';

const ALogin = () => {
    
    const [event, setEvent]=useState({
        email:"",
        password:""
    })
    const [err,setErr]=useState("")
    const handleChange=(e)=>{
        const newUser={...event};
        newUser[e.target.name]= e.target.value
        setEvent(newUser);
    }
    const history=useHistory()
    
    console.log(event)
    const handleSubmit = (e) =>{
        axios.post('http://127.0.0.1:8000/api/Alogin',event)
        .then(resp=>{
            if (!resp.data) {
                console.log('error')
            } else {
                if (resp.data.message) {
                    console.log(resp.data)
                    setEvent({
                        email:"",
                        password:""
                    })
                    setErr(resp.data.message)
                } else {
                    localStorage.setItem('userId',resp.data.id)
                    localStorage.setItem('userData',resp.data)
                    history.push('/admindash');
                }
                
                
            }
            
        }).catch(err=>{
            
            console.log(err);
        });
        e.preventDefault();
    }
    return (
        <div>
            <A2Header/>
            <div class="page">
                
                <div class="login_body">
                {
                    err?<div class="alert alert-info">{err}</div>:
                    ""
                }
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                        <h2>Admin Login</h2>
                            <label for="formGroupExampleInput" class="form-label">Email :</label>
                            <input type="text" name="email" class="form-control" id="formGroupExampleInput" onChange={handleChange}/>
                        </div>

                        <div class="mb-3" style={{"marginTop": "20px"}}>
                            <label for="formGroupExampleInput2" class="form-label">Password :</label>
                            <input type="password" name="password" class="form-control" id="formGroupExampleInput2" onChange={handleChange}/>
                        </div>
                        <input type="submit" name="submit" value="Sign in" class="btn btn-primary login_button" />
                        
                    </form>
                </div>
            
            </div>
        </div>
    );
};

export default ALogin;
