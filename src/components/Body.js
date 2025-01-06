import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurants, setRestaurants] = useState(resList);

  filterTopRatedRes = (resList) => {
    const topRatedRestaurants = resList.filter(
      (restaurant) => restaurant?.info?.avgRating > 4
    );

    setRestaurants(topRatedRestaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => filterTopRatedRes(restaurants)}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
