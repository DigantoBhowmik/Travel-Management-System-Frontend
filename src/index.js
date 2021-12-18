import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Showpackages from './components/Package/Showpackages';
import Packagesdetails from './components/Package/Packagesdetails';
import Registration from './components/User/Registration';
import Login from './components/User/Login';
import Profiledata from './components/User/Profiledata';
import Booking from './components/User/Booking';
import Createpackage from './components/Agent/Createpackage';
import Bookingpackagelist from './components/Agent/Bookingpackagelist';
import Editpackage from './components/Agent/Editpackage';
import Editpackagemap from './components/Agent/Editpackagemap';

import AHome from './components/Admin/AHome';
import ALogin from './components/Admin/ALogin';
import Admins from './components/Admin/Admins';
import AProfiledata from './components/Admin/AProfiledata'; 
import AShowadmins from './components/Admin/AShowadmins'; 
import Admindetails from './components/AdminMap/Admindetails';
import AShowevents from './components/Admin/AShowevents'; 
import Eventdetails from './components/AEventMap/Eventdetails'; 
import AShowagents from './components/Admin/AShowagents'; 
import AShowusers from './components/Admin/AShowusers'; 
import AShowpackages from './components/Admin/AShowpackages';
import Packagedetails from './components/APackageMap/Packagedetails'; 
import AUsers from './components/Admin/AUsers';

const user =localStorage.getItem('userData')
console.log(user)


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <div className="container">
            <Switch>

              <Route exact path="/">
                <Home></Home>
                
              </Route>
              
              <Route exact path="/packages">
                <Showpackages></Showpackages>
              </Route>

              <Route exact path="/createpackages">
                <Createpackage/>
              </Route>
              
              <Route exact path="/editpackage/:id">
                <Editpackagemap/>
              </Route>

              <Route exact path="/book/:id">
                <Bookingpackagelist/>
              </Route>

              <Route exact path="/packagedetails/:id">
                <Packagesdetails></Packagesdetails>
              </Route>

              <Route exact path="/register">
                <Registration></Registration>
              </Route>

              <Route exact path="/login">
                <Login></Login>
              </Route>
              
                
                <Route exact path="/profile">
                  {(user)?
                    <Profiledata></Profiledata>
                    :<Login></Login>}
                </Route>
                
              
              





       {/* Admin part start */}

               
              {/* Part-1 [ Admindash]*/}
               <Route exact path="/admindash">
                <AHome></AHome>
              </Route>
              {/* Part-2 [Admins CRUD] */}
              <Route exact path="/admins">
                <AShowadmins></AShowadmins>
              </Route>
              <Route exact path="/admindetails/:id">
                <Admindetails></Admindetails>
              </Route>


              {/* Admin Package routes */}
              <Route exact path="/adminpackages">
                <AShowpackages></AShowpackages>
              </Route>
              <Route exact path="/adminpackagedetails/:id">
                <Packagedetails></Packagedetails>
              </Route>
              
              {/* Admin Events routes */}
              <Route exact path="/events">
                <AShowevents></AShowevents>
              </Route>
              <Route exact path="/eventdetails/:id">
                <Eventdetails></Eventdetails>
              </Route>
              
               {/* Admin Agents routes */}
               <Route exact path="/agents">
                <AShowagents></AShowagents>
              </Route>

               {/* Admin Users routes */}
               <Route exact path="/users">
                <AShowusers></AShowusers>
              </Route>


               {/* Admin login */}
              <Route exact path="/Alogin">
                <ALogin></ALogin>
              </Route> 

               {/* Admin Create */}
               <Route exact path="/admincreate">
                <ACreate></ACreate>
              </Route>

              {/* Admin profile update */}
              <Route exact path="/Aprofile">
                <AProfiledata></AProfiledata>
              </Route>
              
              <Route exact path="/userdelete/:id">
              
                <AUsers></AUsers>
              </Route>

              
        {/* admin end */}




              
              <Route exact path="/mybooking">
                  {(user)?
                    <Booking></Booking>
                    :<Login></Login>}
                
              </Route>
            </Switch>
          </div>
        <Footer></Footer>
      </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
