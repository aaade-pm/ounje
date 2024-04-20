import { useContext } from "react";
import { CountryDishContext } from "../contexts/CountryDishContext";

const CountryDishDropdown = () => {
  const { countries, countryClick, showCountryOptions, showOptions } =
    useContext(CountryDishContext);

  return (
    <div>
      <button onClick={showCountryOptions} className="mobile-country-button">
        Choose country
      </button>
      <ul>
        {showOptions &&
          countries.map((country) => (
            <div className="mobile-country-options" key={Math.random()}>
              <button
                value={country.strArea}
                onClick={countryClick}
                className="country-option"
              >
                {country.strArea}
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default CountryDishDropdown;
