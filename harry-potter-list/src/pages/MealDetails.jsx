// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getMealById } from "../services/mealService";
// import Loading from "../components/Loading";
// import ErrorBox from "../components/ErrorBox";

// const MealDetails = () => {
//   const { id } = useParams(); 
//   const navigate = useNavigate();
//   const [meal, setMeal] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const data = await getMealById(id);
//         if (!data) throw new Error("Meal not found");
//         setMeal(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDetails();
//   }, [id]);

//   if (loading) return <Loading />;
//   if (error) return <ErrorBox message={error} />;
//   if (!meal) return <ErrorBox message="Meal not found" />;

//   return (
//     <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem', background: 'white', borderRadius: '10px' }}>
//       <button onClick={() => navigate(-1)} className="load-btn" style={{ marginBottom: '1rem' }}>
//         ← Back
//       </button>
      
//       <h1>{meal.strMeal}</h1>
//       <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px' }} />
      
//       <div style={{ marginTop: '1rem', textAlign: 'left' }}>
//         <p><strong>Category:</strong> {meal.strCategory}</p>
//         <p><strong>Area:</strong> {meal.strArea}</p>
//         <p><strong>Tags:</strong> {meal.strTags || 'None'}</p>
        
//         <h3>Instructions</h3>
//         <p style={{ lineHeight: '1.6' }}>{meal.strInstructions}</p>
        
//         {meal.strYoutube && (
//             <p>
//                 <strong>Video Guide:</strong> <a href={meal.strYoutube} target="_blank" rel="noreferrer">Watch on YouTube</a>
//             </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MealDetails;




import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Хуки Redux
import { fetchItemById } from "../features/itemSlice"; // Наш Thunk

import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";

const MealDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Достаем данные из Redux
  const { selectedItem, loadingItem, errorItem } = useSelector((state) => state.items);

  useEffect(() => {
    if (id) {
      dispatch(fetchItemById(id));
    }
  }, [id, dispatch]);

  if (loadingItem) return <Loading />;
  if (errorItem) return <ErrorBox message={errorItem} />;
  
  // Если загрузка прошла, но блюда нет (например null)
  if (!selectedItem && !loadingItem) return <ErrorBox message="Meal not found" />;

  // Для удобства переименуем selectedItem в meal
  const meal = selectedItem;

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem', background: 'white', borderRadius: '10px' }}>
      <button onClick={() => navigate(-1)} className="load-btn" style={{ marginBottom: '1rem' }}>
        ← Back
      </button>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px' }} />
      <div style={{ marginTop: '1rem', textAlign: 'left' }}>
        <p><strong>Category:</strong> {meal.strCategory}</p>
        <p><strong>Area:</strong> {meal.strArea}</p>
        <p><strong>Tags:</strong> {meal.strTags || 'None'}</p>
        <h3>Instructions</h3>
        <p style={{ lineHeight: '1.6' }}>{meal.strInstructions}</p>
        {meal.strYoutube && (
            <p>
                <strong>Video Guide:</strong> <a href={meal.strYoutube} target="_blank" rel="noreferrer">Watch on YouTube</a>
            </p>
        )}
      </div>
    </div>
  );
};

export default MealDetails;