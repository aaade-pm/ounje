import { useContext } from "react";
import { CountryDishContext } from "../contexts/CountryDishContext";

const CountryDishButtons = () => {
  const { countries, countryClick } = useContext(CountryDishContext);

  return (
    <>
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
    </>
  );
};

export default CountryDishButtons;
