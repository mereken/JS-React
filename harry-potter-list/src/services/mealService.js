
const API_BASE = "https://www.themealdb.com/api/json/v1/1";

export const searchMeals = async (query) => {
  // Case 1: If there is NO search query (Default view)
  // We fetch the specific "Seafood" category to match your Ocean Basket theme
  if (!query) {
    const response = await fetch(`${API_BASE}/filter.php?c=Seafood`);
    if (!response.ok) throw new Error("Failed to fetch menu");
    const data = await response.json();
    
    // Note: filter.php returns name, image, and ID, but NOT category/area details.
    // We manually add the category 'Seafood' so your card displays it nicely.
    const formattedMeals = data.meals.map(meal => ({
      ...meal,
      strCategory: "Seafood" 
    }));
    
    return formattedMeals || [];
  }

  // Case 2: If the user TYPED something (e.g., "Chicken", "Pie")
  // We use the search endpoint
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