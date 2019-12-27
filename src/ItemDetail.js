import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom";


function ItemDetail( { match }) { // match recovers data from the link from the previous page Shop

  // the empty bracke are to specify that the function will only run when the component mounts 
  useEffect(() => {
      fetchItem();
    //   checking the content of match
    //   console.log(match)
  }, [])

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    //   const data = await fetch(url)
    //   const item = await data.json()

    //   console.log(item)
  }

  return (
    <div>
      <h1>Item Page</h1>
    </div>
  );
}

export default ItemDetail;
