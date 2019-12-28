import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Shop() {

  // useEffect used to run the fetchItems function
  // the empty brackets as second argumenet are there to specify that the function will only run when the component mounts 
  useEffect(() => {
    fetchItems();
  }, [])

  // items is the variable, setItems is used to change the value of item 
  const [items, setItems] = useState([]);
  
  // making API call 
  const fetchItems = async () => {
    // using async as it coming from a DB
    const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');

    // converting data receives to a JSON
    const items = await data.json()
    // printing the result of call on the browser console
    console.log(items.civilizations);
    // calling the method
    setItems(items.civilizations);

  }

  return (
    <div>
      <h1>Shop Page</h1>
      {items.map((item) => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;



