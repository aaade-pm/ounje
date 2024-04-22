import { useContext } from "react";
import { CountryDishContext } from "../contexts/CountryDishContext";
import { motion } from "framer-motion";

const CountryDishButtons = () => {
  const { countries, countryClick } = useContext(CountryDishContext);

  return (
    <>
      {countries.map((country) => (
        <motion.button
          value={country.strArea}
          key={Math.random()}
          onClick={countryClick}
          className="country-button"
          animate={{
            opacity: [0, 1],
            y: [-20, 0],
            transition: { duration: 1 },
          }}
        >
          {country.strArea}
        </motion.button>
      ))}
    </>
  );
};

export default CountryDishButtons;
