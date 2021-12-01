import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Home from './components/Home/Home';
import Showpackages from './components/Home/Showpackages';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Showevents from './components/Home/Showevents';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Packagesdetails from './components/Package/Packagesdetails';
import Registration from './components/User/Registration';

ReactDOM.render(
  <React.StrictMode>
    
    
    <Router>
      <Header></Header>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home></Home>
            
            <div className="title">
              <h2>Packages</h2>
            </div>
            <Showpackages></Showpackages>
            <div className="title">
              <h2>Events</h2>
            </div>
            <Showevents></Showevents>
            
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
