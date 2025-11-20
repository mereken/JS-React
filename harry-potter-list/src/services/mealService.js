const API_BASE = "https://www.themealdb.com/api/json/v1/1";

export const searchMeals = async (query) => {
  if (!query) {
    const response = await fetch(`${API_BASE}/filter.php?c=Seafood`);
    if (!response.ok) throw new Error("Failed to fetch menu");
    const data = await response.json();
    
    const formattedMeals = data.meals.map(meal => ({
      ...meal,
      strCategory: "Seafood" 
    }));
    
    return formattedMeals || [];
  }

  const response = await fetch(`${API_BASE}/search.php?s=${query}`);
  if (!response.ok) throw new Error("Failed to fetch data");
  const data = await response.json();
  return data.meals || [];
};

export const getMealById = async (id) => {
  const response = await fetch(`${API_BASE}/lookup.php?i=${id}`);
  if (!response.ok) throw new Error("Failed to fetch meal details");
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
};