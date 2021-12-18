import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Header';
import Showcreatepackage from './Showcreatepackage';

const Createpackage = () => {
    const id=localStorage.getItem('userId')
    const [packages,setPackages]=useState({
        name:"",
        price:"",
        shortdesc:"",
        desc:"",
        image:"",
        agentname:""

    })

    const history=useHistory();

    const handleChange=(e)=>{
        const newPackages={...packages};
        newPackages[e.target.name]=e.target.value
        setPackages(newPackages);
    }
    packages.agentname=id
    console.log(packages.agentname)
    const handleSubmit=(e)=>{
            axios.post('http://127.0.0.1:8000/api/createpackages',packages)
            .then(resp=>{
              if (!resp.data) {
                console.log('erorr')
            } else {
              
              history.push('/packages');
            }
           }).catch(err=>{
              console.log(err);
            });
            e.preventDefault();
    }

    return (
        <div>
            <Header/>
        <div className="createPart">
        
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <label for="formGroupExampleInput" className="form-label">Package Name :</label>
                <input type="text" name="name" className="form-control" id="formGroupExampleInput" onChange={handleChange}/>
              </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}} >Price :</label>
                <input type="text" name="price" className="form-control" id="formGroupExampleInput" onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Short Description</label>
                <input type="text" name="shortdesc" className="form-control" id="formGroupExampleInput" onChange={handleChange}/>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="desc" onChange={handleChange}></textarea>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Image</label>
                <input className="form-control" id="exampleFormControlTextarea1" rows="3" name="image" onChange={handleChange}/>
              </div>

              {/* <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}} >Agent Name</label>
                <input type="text" name="agentname" className="form-control" id="formGroupExampleInput" defaultValue={id} onChange={handleChange}/>
              </div> */}
              
              <input type="submit" name="submit" value="Add Package" className="btn btn-primary login_button"/>
          </form>  
        </div>
        <Showcreatepackage></Showcreatepackage>
        </div>
        
    );
};

export default Createpackage;