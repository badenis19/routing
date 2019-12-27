import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Item() {

  // the empty bracke are to specify that the function will only run when the component mounts 
  useEffect(() => {}, [])

  const [item, setItem] = useState([]);

  return (
    <div>
      <h1>Item Page</h1>
    </div>
  );
}

export default Item;
