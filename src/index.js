import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home/Home';
import Showpackages from './components/Home/Showpackages';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Showevents from './components/Home/Showevents';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Packagesdetails from './components/Package/Packagesdetails';
import Registration from './components/User/Registration';
import Login from './components/User/Login';
import Profiledata from './components/User/Profiledata';
import Packagedata from './components/Home/agent/Packagedata';

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
                <Profiledata></Profiledata>
              </Route>
              <Route exact path="/createpackges">
                <Packagedata/>
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
