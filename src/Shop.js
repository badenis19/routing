import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Shop() {

  // the empty bracke are to specify that the function will only run when the component mounts 
  useEffect(() => {
    fetchItems();
  }, [])

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');

    const items = await data.json()
    console.log(items.civilizations);
    setItems(items.civilizations);

  }

  return (
    <div>
      <h1>Shop Page</h1>
      {items.map((item) => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      )
      
      )}
    </div>
  );
}

export default Shop;
