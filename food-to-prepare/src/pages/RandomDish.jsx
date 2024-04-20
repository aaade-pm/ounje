import { useContext } from "react";
import { RandomMealContext } from "../contexts/RandomMealContext";
import MealCard from "../components/MealCard";
import NavBar from "../components/NavBar";

const RandomDish = () => {
  const { fetchRandomMeal, showRandom, randomResult } =
    useContext(RandomMealContext);
  return (
    <div className="random-dish">
      <NavBar />
      <h1 className="random-header">
        YOU DON’T KNOW WHAT TO COOK ? SAY LESS🍝
      </h1>

      <div className="random-button">
        <button onClick={fetchRandomMeal}>DeCiDe FoR Me😫</button>
      </div>

      <div className="card-display">
        {showRandom && randomResult && randomResult.length > 0 && <MealCard />}
      </div>
    </div>
  );
};

export default RandomDish;
