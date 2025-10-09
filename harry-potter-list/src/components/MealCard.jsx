import React from 'react';
import './MealCard.css'; 


const MealCard = ({ meal }) => {
  return (
    <li className="meal-card-item">
      <div className="card-content">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <section>
          <h2>{meal.strMeal}</h2>
          <p><strong>Category:</strong> {meal.strCategory || 'N/A'}</p>
          <p><strong>Area:</strong> {meal.strArea || 'N/A'}</p>
          <p><strong>Tags:</strong> {meal.strTags || "No tags"}</p>
        </section>
      </div>
    </li>
  );
};

export default MealCard;