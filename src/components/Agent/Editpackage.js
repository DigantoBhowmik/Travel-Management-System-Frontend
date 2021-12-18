import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Header';

const Editpackage = (props) => {
    const{id,name,price,shortdesc,desc,image,agentname}=props.packages
    const agentid=localStorage.getItem('userId')
    const [update,setUpdate ]=useState({
        id:"",
        name:"",
        price:"",
        shortdesc:"",
        desc:"",
        image:"",
        agentname:""

    });
    update.agentname=agentid;

    const mount=()=>{
        setUpdate(
            {
                ...update,
                id:id,
                name:name,
                price:price,
                shortdesc:shortdesc,
                desc:desc,
                image:image,
                agentname:agentname
            }
        )
    }
    useEffect(()=>{
        mount()
    },[])
    console.log(update)
    const handleChange=(e)=>{
        const newUpdate={...update};
        newUpdate[e.target.name]=e.target.value 
        setUpdate(newUpdate);
    }

    const history=useHistory()
    const [nameErr, setNameErr]=useState("");
    const [priceErr, setPriceErr]=useState("");
    const [shortdescErr, setShortdescErr]=useState("");
    const [descErr, setDescErr]=useState("");
    const [imageErr, setImageErr]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(update.name!=="" && update.price!=="" && update.shortdesc!=="" && update.desc!=="" && update.image!=="")
        {
            console.log(update)
            axios.post(`http://127.0.0.1:8000/api/editpackage/${id}`,update)
            .then(resp=>{
                if(!resp.data){
                    console.log('error')
                }
                else{
                    history.push('/createpackages')
                }
                //console.log(resp.data)
            }).catch(err=>{
            console.log(err);
            });
        }
        else
        {
            if(update.name==="")
                setNameErr("Name is required");
            else
                setNameErr("")

            if(update.price==="")
                setPriceErr("Price is required")
            else
                setPriceErr("")
            if(update.shortdesc==="")
                setShortdescErr("Short Description is required")
            else
                setShortdescErr("")
            if(update.desc==="")
                setDescErr("Description is required")
            else
                setDescErr("")
            if(update.image==="")
                setImageErr("Image is required")
            else
                setImageErr("")
        }
    }


    return (
        <div>
            <Header/>
            <div className="createPart"> 
          <form onSubmit={handleSubmit}>
            <div class="mb-6">
                <label for="formGroupExampleInput" className="form-label">Package Name :</label>
                <input type="text" name="name" className="form-control" id="formGroupExampleInput" defaultValue={name} onChange={handleChange} onClick={mount} />
                <p style={{color: "red"}}>{nameErr}</p>
              </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Price :</label>
                <input type="text" name="price" className="form-control" id="formGroupExampleInput" defaultValue={price} onChange={handleChange}/>
                <p style={{color: "red"}}>{priceErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Short Description</label>
                <input type="text" name="shortdesc" className="form-control" id="formGroupExampleInput" defaultValue={shortdesc} onChange={handleChange} />
                <p style={{color: "red"}}>{shortdescErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="desc" defaultValue={desc} onChange={handleChange}></textarea>
                <p style={{color: "red"}}>{descErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Image</label>
                <input className="form-control" id="exampleFormControlTextarea1" rows="3" name="image" defaultValue={image} onChange={handleChange}/>
                <p style={{color: "red"}}>{imageErr}</p>
              </div>

              {/* <div className="mb-3" hidden>
                <label for="formGroupExampleInput" className="form-label" style="margin-top: 20px">Agent Name</label>
                <input type="text" name="agentname" className="form-control" id="formGroupExampleInput" value="{{Session()->get('userId')}}">
                @error('agentname')
                  <span className="text-danger">{{$message}}</span>
                 @enderror
              </div> */}
              
              <input type="submit" name="submit" value="Edit Package" className="btn btn-primary login_button"/>
          </form>  
        </div>
        </div>
    );
};

export default Editpackage;