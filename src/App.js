import React from 'react';
import './App.css';
// import NameOfComponent from "path"
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import ItemDetail from "./ItemDetail";
// react router libraries to import to handle routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// everything between the router tags will be able to use routing
function App() {
  return (
    <Router>

      <div className="App">

        {/* Nav component remain as we want it on every pages */}
        <Nav />

        <Switch>

          {/* use of exact will display Home compoenent only when the path is '/' */}
          <Route 
          path="/" 
          exact
          component={Home} /> 

          {/* On path /about, render the component About */}
          <Route 
          path="/about" 
          component={About} /> 

          {/* On path /shop , render the component Shop */}
          <Route 
          path="/shop" 
          exact
          component={Shop} />

          <Route 
          path="/shop/:id" 
          component={ItemDetail} />

        </Switch>
      </div>

    </Router>
  );
}

// just for test, defined a component in this file
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
