import { SavedMealContext } from "../SavedMealContext";
import { useContext } from "react";

const FavoriteMeals = () => {
  const { savedMeals } = useContext(SavedMealContext);
  return (
    <div>
      {savedMeals.length > 0 &&
        savedMeals.map((meal, index) => (
          <div key={index} className="favorite-card">
            <div className="favorite-image">
              <img src={meal.image} alt="" />
            </div>
            <div className="favorite-content">
              <p>{meal.name}</p>
              <p>{meal.category}</p>
              <p>{meal.area}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FavoriteMeals;
