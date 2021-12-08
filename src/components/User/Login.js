import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Header from '../Header';

const Login = () => {
    
    const [event, setEvent]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        const newUser={...event};
        newUser[e.target.name]= e.target.value
        setEvent(newUser);
    }
    const history=useHistory()
    
    console.log(event)
    const handleSubmit = (e) =>{
        axios.post('http://127.0.0.1:8000/api/login',event)
        .then(resp=>{
            if (!resp.data) {
                console.log('vil')
            } else {
                localStorage.setItem('userId',resp.data.id)
                localStorage.setItem('userData',resp.data)
                history.push('/');
            }
            
        }).catch(err=>{
            
            console.log(err);
        });
        e.preventDefault();
    }
    return (
        <div>
            <Header/>
            <div class="page">
                
                <div class="login_body">
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Email :</label>
                            <input type="text" name="email" class="form-control" id="formGroupExampleInput" onChange={handleChange}/>
                        </div>

                        <div class="mb-3" style={{"marginTop": "20px"}}>
                            <label for="formGroupExampleInput2" class="form-label">Password :</label>
                            <input type="password" name="password" class="form-control" id="formGroupExampleInput2" onChange={handleChange}/>
                        </div>
                        <input type="submit" name="submit" value="Sign in" class="btn btn-primary login_button" />
                        <div class="swap_between_login_register">
                            <p>Don't have any account?</p>
                            <u><Link to="/register"> Create an account</Link></u>
                        </div>
                    </form>
                </div>
            
            </div>
        </div>
    );
};

export default Login;
