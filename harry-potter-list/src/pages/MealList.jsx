import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Хуки Redux
import { fetchItems } from "../features/itemSlice"; // Наш Thunk

import MealCard from "../components/MealCard";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";
import "./MealList.css"; 

const MealList = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const { list, loadingList, errorList } = useSelector((state) => state.items);

  const query = searchParams.get("q") || ""; 
  const [searchInput, setSearchInput] = useState(query);

  useEffect(() => {
    dispatch(fetchItems(query));
  }, [query, dispatch]); 

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchInput });
  };

  return (
    <div className="app">
      <h1>Find a Meal</h1>
      <form onSubmit={handleSearch} className="search-container">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search (e.g. Pasta)..."
          className="search-input"
        />
        <button type="submit" className="load-btn">Search</button>
      </form>

      {loadingList && <Loading />}
      {errorList && <ErrorBox message={errorList} />}
      
      {!loadingList && !errorList && (
        <ul className="meal-list-container">
          {list.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealList;