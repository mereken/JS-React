import { useState } from "react";
import "./App.css";
import MealList from "./components/MealList";

function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRandomIndices = (max, count) => {
    const indices = new Set();
    while (indices.size < count) {
      indices.add(Math.floor(Math.random() * max));
    }
    return Array.from(indices);
  };

  const loadTwoRandomSeafoodMeals = async () => {
    setLoading(true);
    setMeals([]);

    try {
      const listResponse = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      const listData = await listResponse.json();

      if (listData.meals && listData.meals.length >= 6) {
        const seafoodList = listData.meals;
        
        const [index1, index2, index3, index4, index5, index6] = getRandomIndices(seafoodList.length, 6);
        const id1 = seafoodList[index1].idMeal;
        const id2 = seafoodList[index2].idMeal;
        const id3 = seafoodList[index3].idMeal;
        const id4 = seafoodList[index4].idMeal;
        const id5 = seafoodList[index5].idMeal;
        const id6 = seafoodList[index6].idMeal;

        const detailUrls = [
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id1}`,
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id2}`, 
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id3}`,
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id4}`,
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id5}`,
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id6}`
        ];

        const detailResponses = await Promise.all(detailUrls.map(url => fetch(url)));
        
        const detailDatas = await Promise.all(detailResponses.map(res => res.json()));

        const meal1 = detailDatas[0].meals[0];
        const meal2 = detailDatas[1].meals[0];
        const meal3 = detailDatas[2].meals[0];
        const meal4 = detailDatas[3].meals[0];
        const meal5 = detailDatas[4].meals[0];
        const meal6 = detailDatas[5].meals[0];
        
        setMeals([meal1, meal2, meal3, meal4, meal5, meal6]); 
      }
    } catch (error) {
      console.error("Failed to fetch two random seafood meals:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Random Seafood Meals</h1>
      
      <button className="load-btn" onClick={loadTwoRandomSeafoodMeals} disabled={loading}>
        {loading ? "Loading..." : "Load New Meals"}
      </button>

      {/* передаем массив из двух блюд в MealList */}
      <MealList meals={meals} />
    </div>
  );
}

export default App;