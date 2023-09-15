import React, { useEffect, useState } from 'react';
import './restbox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import Star from '../rating/Star';
import axios from 'axios';
import image from "../../img/rest1.jpg"

function Restbox() {
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

  const completedStars = 3;

  return (
    <div>
      {restaurants &&
        restaurants.map((restaurant) => (
          <div className="restbox" key={restaurant._id}>
            <a href="/food">
              <div>
                <img src={image} alt={`Restaurant ${restaurant.name}`} />
              </div>
              <div>
                <FontAwesomeIcon icon={faHeart} className="heart" />
              </div>
              {/* <div><FontAwesomeIcon icon={faPlus} className='plus'/></div> */}
              {/* <div className="rstar">
                {[1, 2, 3, 4, 5].map((starValue) => (
                  <Star key={starValue} filled={starValue <= completedStars} />
                ))}
              </div> */}
              <div>
                <h3>{restaurant.name}</h3>
                <h3>{restaurant.address}</h3>
                
              </div>
            </a>
          </div>
        ))}
    </div>
  );
}

export default Restbox;
