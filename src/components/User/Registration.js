import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
const Registration = () => {
  
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        Confirm_Password:""
    })

    const validateEmail = (email) =>
        email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    

    const history=useHistory();

    const [nameErr, setNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [phoneErr, setPhoneErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [rpasswordErr, setRpasswordErr] = useState("");

      
    const handleChange=(e)=>{
      const newUser={...user};
      newUser[e.target.name]= e.target.value
      setUser(newUser);
    }

    const handleSubmit=(e)=>{
        
        console.log(user)
        e.preventDefault();
        if(user.name !== ""  && user.phone !== "" && user.email !== "" &&  user.password !== "" && user.Confirm_Password !== "" && user.password===user.Confirm_Password ) 
        {
            setNameErr("")
            setPhoneErr("")
            setPasswordErr("")
            setRpasswordErr("")
            axios.post('http://127.0.0.1:8000/api/register',user)
            .then(resp=>{
              if (!resp.data) {
                console.log('erorr')
            } else {
              localStorage.setItem('userId',resp.data.id)
              localStorage.setItem('userData',resp.data)
              history.push('/');
            }
           }).catch(err=>{
              console.log(err);
              setEmailErr("This mail already used")
            });
           
        }
        else{
            if(user.name === "")
                setNameErr("Please fill the name");
            else
                setNameErr("")

            if(user.phone === "")
                setPhoneErr("Please fill the phone number");
            else
                setPhoneErr("")

            if(user.email === "")
                setEmailErr("Please fill the Email");
            else
                setEmailErr("")

            if(!validateEmail(user.email))
                setEmailErr("Please enter valid mail");
            else
                setEmailErr("");

            if(user.password === "")
                setPasswordErr("Please fill the Password");
            else
                setPasswordErr("")

            if(user.Confirm_Password === "")
                setRpasswordErr("Please fill the Confirm Password");
            else
                setRpasswordErr("")

            if(user.password !== user.Confirm_Password)
                setRpasswordErr("Doestn't Match");
            else
                setRpasswordErr("")
        }
        
    }

    
    return (
      <div>
        <Header/>
        <div className="register_page">
        <div className="register_body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Full Name :</label>
                <input type="text" name="name" className="form-control" id="formGroupExampleInput" onChange={handleChange}/>
                <p style={{color: "red"}}>{nameErr}</p>
              </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Email :</label>
                <input type="text" name="email" className="form-control" id="formGroupExampleInput" onChange={handleChange}/>
                <p style={{color: "red"}}>{emailErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Phone :</label>
                <input type="text" name="phone" className="form-control" id="formGroupExampleInput" onChange={handleChange}/>
                <p style={{color: "red"}}>{phoneErr}</p>
              </div>

              <div className="mb-3" style={{marginTop: "20px"}}>
                <label for="formGroupExampleInput2" className="form-label">Password :</label>
                <input type="password" name="password" className="form-control" id="formGroupExampleInput2" onChange={handleChange}/>
                <p style={{color: "red"}}>{passwordErr}</p>
              </div>
              <div className="mb-3" style={{marginTop: "20px"}}>
                <label for="formGroupExampleInput2" className="form-label">Confirm Password :</label>
                <input type="password" name="Confirm_Password" className="form-control" id="formGroupExampleInput2" onChange={handleChange}/>
                <p style={{color: "red"}}>{rpasswordErr}</p>
              </div>
              <input type="submit" name="submit" value="REGISTER" className="btn btn-primary login_button"/>
              <div className="swap_between_login_register">
                <p>Already have an account?</p>
                <u> <Link to="/login"> Sign in here</Link></u>
            </div>
          </form>  
        </div>
        
      </div>
    </div>
    );
};

export default Registration;
