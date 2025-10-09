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

      if (listData.meals && listData.meals.length >= 2) {
        const seafoodList = listData.meals;
        
        const [index1, index2] = getRandomIndices(seafoodList.length, 2);
        const id1 = seafoodList[index1].idMeal;
        const id2 = seafoodList[index2].idMeal;

        const detailUrls = [
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id1}`,
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id2}`
        ];

        const detailResponses = await Promise.all(detailUrls.map(url => fetch(url)));
        
        const detailDatas = await Promise.all(detailResponses.map(res => res.json()));

        const meal1 = detailDatas[0].meals[0];
        const meal2 = detailDatas[1].meals[0];
        
        setMeals([meal1, meal2]); 
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
        {loading ? "Loading..." : "Load Two New Meals"}
      </button>

      {/* передаем массив из двух блюд в MealList */}
      <MealList meals={meals} />
    </div>
  );
}

export default App;