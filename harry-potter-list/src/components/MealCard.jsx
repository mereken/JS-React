import { Link } from 'react-router-dom';
import './MealCard.css'; 

const MealCard = ({ meal }) => {
  return (
    <li className="meal-card-item">
      <div className="card-content">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <section>
          <h2>{meal.strMeal}</h2>
          <p><strong>Category:</strong> {meal.strCategory}</p>
          <Link to={`/items/${meal.idMeal}`} style={{ textDecoration: 'none' }}>
             <button className="load-btn" style={{marginTop: '10px', width: '100%'}}>View Details</button>
          </Link>
        </section>
      </div>
    </li>
  );
};

export default MealCard;