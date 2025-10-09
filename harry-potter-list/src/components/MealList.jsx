import React from 'react';
import MealCard from './MealCard';
import './MealList.css'; 

const MealList = ({ meals }) => {
  if (meals.length === 0) {
    return <div className="empty-list-message">Click the button to load a random Seafood meal!</div>;
  }
  return (
    <ul className="meal-list-container single-item">
      {}
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </ul>
  );
};

export default MealList;