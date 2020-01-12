import React from "react";
import "./app.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/signup/signup";
import Home from "./components/Feed/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Feed from"./components/Feed/Feed";
import Profile from './components/Profile/Profile'

const App = () => (
  <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/about" component={About} />
      <Route path ="/feed" component ={Feed}/> 
      <Route path="/profile" component={Profile}/>
    </Switch>
  </Router>
);
export default App;
