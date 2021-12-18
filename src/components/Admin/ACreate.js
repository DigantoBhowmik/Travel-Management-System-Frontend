import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AHeader from '../AHeader';
const ACreate = () => {
  
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
            axios.post('http://127.0.0.1:8000/api/admincreate',user)
            .then(resp=>{
              if (!resp.data) {
                console.log('erorr')
            } else {
              // localStorage.setItem('userId',resp.data.id)
              // localStorage.setItem('userData',resp.data)
              history.push('/admins');
            }
           }).catch(err=>{
              console.log(err);
              setEmailErr("This mail is already used by someone else")
            });
           
        }
        else{
            if(user.name === "")
                setNameErr("Please Fill up the name");
            else
                setNameErr("")

            if(user.phone === "")
                setPhoneErr("Please Fill up the phone number");
            else
                setPhoneErr("")

            if(user.email === "")
                setEmailErr("Please give the Email Address");
            else
                setEmailErr("")

            if(!validateEmail(user.email))
                setEmailErr("Please Enter Valid Email Address");
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
                setRpasswordErr("Confirm Password Doestn't Match With Password");
            else
                setRpasswordErr("")
        }
        
    }

    
    return (
      <div>
        <AHeader/>
        <div className="register_page">
        <div className="register_body">
          <form onSubmit={handleSubmit}>
              <h2><u>Create An Admin</u></h2> 
              <br></br>
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
              <input type="submit" name="submit" value="Create Admin" className="btn btn-primary login_button"/>
          </form>  
        </div>
        
      </div>
    </div>
    );
};

export default ACreate;
