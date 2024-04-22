import { useContext } from "react";
import { CountryDishContext } from "../contexts/CountryDishContext";
import NavBar from "../components/NavBar";
import CountryDishButtons from "../components/CountryDishButtons";
import CountryDishDropdown from "../components/CountryDishDropdown";
import { AnimatePresence, motion } from "framer-motion";

const CountryDish = () => {
  const { countryDishes } = useContext(CountryDishContext);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <NavBar />

        <div className="country-buttons">
          <CountryDishButtons />
        </div>

        <div className="country-dropdown">
          <CountryDishDropdown />
        </div>

        <motion.div className="country-dishes">
          {countryDishes.map((dish) => (
            <motion.div
              key={Math.random()}
              className="dish"
              animate={{
                opacity: [0, 1],
                scale: [0.5, 1],
                transition: { duration: 1 },
              }}
            >
              <div className="dish-image">
                <img src={dish.strMealThumb} alt="" />
              </div>
              <h2>{dish.strMeal}</h2>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CountryDish;
