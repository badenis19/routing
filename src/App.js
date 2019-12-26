import React from 'react';
import './App.css';
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
// react router libraries to import to handle routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// everything between the router tags will be able to use routing
function App() {
  return (
    <Router>

      <div className="App">
        <Nav />

        <Route path="/about" /> 
        
        <Shop />
      </div>

    </Router>
  );
}

export default App;
