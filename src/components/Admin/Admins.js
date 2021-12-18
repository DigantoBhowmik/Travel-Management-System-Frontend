import React from 'react';
import { Link } from 'react-router-dom';


const admins = (props) => {
    const {id,name,email,phone}=props.ad
    return (

            <div className="image-cards col-md-3">
                <Link to={"/admindetails/"+id}>
                    
            <table>
                 <tbody>
                     <tr>
                         <td>Name:</td>
                         <td>{name}</td>
                     </tr>
                     <tr>   
                         <td>ID:</td>
                         <td>{id}</td>
                     </tr>
                     <tr>
                         <td>email:</td>
                         <td>{email}</td>
                     </tr>
                     <b>Click here</b>
                     {/* <br></br> <b>Edit</b> <b>   Delete</b>  */}
                     {/* <tr>
                         <td>phone:</td>
                         <td>{phone}</td>
                     </tr> */}
                 </tbody>
             </table>
             </Link>
         </div>
      
    );
};

export default admins;