import axios from 'axios';
import React, {useState} from 'react';
import Header from '../Header';

const Profile = (props) => {
    const {id,name,email,role,password,phone}=props.user
    console.log(props.user)
    console.log(name)
    const [update,setUpdate]=useState({
        id: id,
        name: name,
        email: email,
        phone: phone,
        role: role,
        password: password
    })
    
    const handleChange=(e)=>{
        const newUpdate={...update};
        newUpdate[e.target.name]= e.target.value
        setUpdate(newUpdate);
    }
    console.log(update)
    const handleSubmit=(e)=>{
        
        console.log(update)
        axios.post('http://127.0.0.1:8000/api/profile',update)
        .then(resp=>{
            if (!resp.data) {
              console.log('vil')
          } else {
              localStorage.setItem('userId',resp.data.id)
          }
        }).catch(err=>{
          console.log(err);
        });
        e.preventDefault();
    }
    return (
        <div>
            <Header/>
            <div className="row gutters" style={{marginTop:"50px"}}>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                    <div className="card-body">
                        <div className="account-settings">
                            <div className="user-profile">
                            
                                <h5 className="user-name"><i className="fas fa-user"></i><b> {name}</b></h5>
                                <h6 className="user-email"><i className="fas fa-envelope"></i><b> {email}</b></h6>
                                <h5 className="user-name"><i className="fas fa-phone-alt"></i><b> {phone}</b></h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
                
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 className="mb-2 text-primary">Personal Details</h6>
                            </div>
                            
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="fullName">Full Name</label>
                                    <input type="text" className="form-control" name="name" defaultValue={name} onChange={handleChange}/>
                                </div>
                            </div>
                            
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="eMail">Email</label>
                                    <input type="email" className="form-control" name="email" defaultValue={email} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="text" className="form-control" name="phone" defaultValue={phone} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="website">Role</label>
                                    {
                                        role==='user'?
                                        <select name="role" class="form-control" >
                                            <option value="user" onChange={handleChange}>{role}</option>
                                            <option value="agent" onChange={handleChange}>agent</option>
                                        </select>
                                        :<select  name="role" class="form-control">
                                            <option value="agent">{role}</option>
                                        </select>
                                    }
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
                                    <input type="password" className="form-control" name="password" defaultValue={password} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label for="cpassword">Confirm Password</label>
                                    <input type="password" className="form-control" name="Confirm_Password" defaultValue={password} onChange={handleChange}/>
                                </div>
                            </div>
                        
                        </div>
                        
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="text-right">
                                    <input type="submit" name="submit" value="UPDATE" className="btn btn-primary login_button"/>
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

export default Profile;