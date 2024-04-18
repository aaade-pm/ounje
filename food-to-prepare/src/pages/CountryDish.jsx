import { useContext } from "react";
import { FetchDataContext } from "../FetchDataContext";
import NavBar from "../components/NavBar";

const CountryDish = () => {
  const { countries, countryDishes, countryClick } =
    useContext(FetchDataContext);
  return (
    <div>
      <NavBar />

      <div className="country-buttons">
        {countries.map((country) => (
          <button
            value={country.strArea}
            key={Math.random()}
            onClick={countryClick}
            className="country-button"
          >
            {country.strArea}
          </button>
        ))}
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
