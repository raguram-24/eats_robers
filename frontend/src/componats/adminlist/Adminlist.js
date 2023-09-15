import React from 'react'
import "./adminlist.scss"
import { useEffect, useState } from 'react';
import axios from 'axios';
function Adminlist() {
    const url = 'http://localhost:4000/restaurants';

    const [restaurants, setRestaurants] = useState([]);
  
    useEffect(() => {
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          setRestaurants(response.data.restaurant);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
    return (

           <div>
      {restaurants &&
        restaurants.map((restaurant) => (
          <div className='adminheader' key={restaurant._id}>
          <div className='name'>{restaurants.name}</div>
          <div className='num'>{restaurants.phonenumber }</div>
          <div className='address'>{restaurants.address}</div>
          <div className='edit'></div>
          </div>
        ))}
    </div>
            
        
    )
}

export default Adminlist
