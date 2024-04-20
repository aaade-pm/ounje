import { useContext } from "react";
import { CountryDishContext } from "../contexts/CountryDishContext";
import NavBar from "../components/NavBar";
import CountryDishButtons from "../components/CountryDishButtons";
import CountryDishDropdown from "../components/CountryDishDropdown";

const CountryDish = () => {
  const { countryDishes } = useContext(CountryDishContext);
  return (
    <div>
      <NavBar />

      <div className="country-buttons">
        <CountryDishButtons />
      </div>

      <div className="country-dropdown">
        <CountryDishDropdown />
      </div>

      <div className="country-dishes">
        {countryDishes.map((dish) => (
          <div key={Math.random()} className="dish">
            <div className="dish-image">
              <img src={dish.strMealThumb} alt="" />
            </div>
            <h2>{dish.strMeal}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryDish;
