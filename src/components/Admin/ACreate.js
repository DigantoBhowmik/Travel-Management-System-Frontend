import axios from 'axios';
import React, {useEffect, useState} from 'react';
import AHeader from '../AHeader';
import { useHistory } from 'react-router-dom';

const ACreate = (props) => {
    const {name,email,phone,password}=props.user
    
    const [update,setUpdate]=useState({
       
        name:"" ,
        email:"" ,
        phone:"" ,
        password:""
    });
    const mount=()=>{
        setUpdate(
            {...update,
                
                name: name,
                email: email,
                phone: phone ,
                password: password
            }
        )
    }
    useEffect(()=>{
        
        mount()
     
    },[])
    console.log(update)
    
    const handleChange=(e)=>{
        const newUpdate={...update};
        newUpdate[e.target.name]= e.target.value
        setUpdate(newUpdate);
    }
    const history=useHistory()
    const handleSubmit=(e)=>{
        
        console.log(update)
        axios.post('http://127.0.0.1:8000/api/create',update)
        .then(resp=>{
            history.push('/create')
        }).catch(err=>{
          console.log(err);
        });
        e.preventDefault();
    }
    return (
        <div>
            <AHeader/>
            <div className="row gutters" style={{marginTop:"50px"}}>
                
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} >
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 className="mb-2 text-primary">Admin Create</h6>
                            </div>
                            
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="fullName" >Full Name</label>
                                    <input type="text" className="form-control" name="name"  onChange={handleChange} onClick={mount}/>
                                </div>
                            </div>
                            
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="eMail">Email</label>
                                    <input type="email" className="form-control" name="email"  onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="text" className="form-control" name="phone" onChange={handleChange}/>
                                </div>
                            </div>
                            
                          </div>
                        
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 className="mt-3 mb-2 text-primary">Change Password</h6>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="Password">Password</label>
                                    <input type="password" className="form-control" name="password" onChange={handleChange}/>
                                </div>
                            </div>
                           
                        
                        </div>
                        
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="text-right">
                                    <input type="submit" name="Create" value="UPDATE" className="btn btn-primary login_button"/>
                                </div>
                            </div>
                        </div>
                    
                        </form>
                    </div>
                    
                </div>
                
                </div>
            
            </div>
        </div>
    );
};

export default ACreate;