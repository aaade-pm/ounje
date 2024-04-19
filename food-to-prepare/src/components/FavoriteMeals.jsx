import { SavedMealContext } from "../contexts/SavedMealContext";
import { useContext } from "react";
import { ImBin } from "react-icons/im";

const FavoriteMeals = () => {
  const { savedMeals, removeMeal } = useContext(SavedMealContext);
  const handleRemoveMeal = (meal) => {
    const mealToRemove = meal;
    removeMeal(mealToRemove);
  };

  return (
    <div>
      {savedMeals.length > 0 ? (
        savedMeals.map((meal, index) => (
          <div key={index} className="favorite-card">
            <div className="favorite-image">
              <img src={meal.image} alt="" />
            </div>
            <div className="favorite-content">
              <div className="favorite-text">
                <p>{meal.name}</p>
                <p>{meal.category}</p>
                <p>{meal.area}</p>
              </div>
              <div className="favorite-icon">
                <ImBin
                  className="remove"
                  onClick={() => handleRemoveMeal(meal)}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="no-favorite">
          <h2>No saved meals</h2>
        </div>
      )}
    </div>
  );
};

export default FavoriteMeals;
