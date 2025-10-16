import React from "react";
import { useState } from "react";
import MealCard from './MealCard';
import './MealList.css'; 

const MealList = ({ meals }) => {
  const [searchBar, setSearchBar] = useState('');
  if (meals.length === 0) {
    return <div className="empty-list-message">Click the button to load a random Seafood meal!</div>;
  }

  const filteredMeals = meals.filter((meal => 
    meal.strMeal.toLowerCase().includes(searchBar.toLowerCase())
  ));

  return (
    <><div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
        className="search-input" 
      />
      <button onClick={(e) => setSearchBar(e.target.value)} className="clear-btn">Clear</button>
    
    </div><ul className="meal-list-container single-item">
      {filteredMeals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </ul></>
  );
};




export default MealList;