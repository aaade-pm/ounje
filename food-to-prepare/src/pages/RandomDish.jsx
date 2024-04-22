import { useContext } from "react";
import { RandomMealContext } from "../contexts/RandomMealContext";
import MealCard from "../components/MealCard";
import NavBar from "../components/NavBar";
import { AnimatePresence, motion } from "framer-motion";

const RandomDish = () => {
  const { fetchRandomMeal, showRandom, randomResult } =
    useContext(RandomMealContext);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="random-dish"
      >
        <NavBar />
        <h1 className="random-header">
          YOU DON’T KNOW WHAT TO COOK ? SAY LESS🍝
        </h1>

        <div className="random-button">
          <motion.button
            onClick={fetchRandomMeal}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1, rotate: 360, transition: { duration: 0.5 } }}
            drag
            dragConstraint={{ top: 0, left: -5, right: 5, bottom: 5 }}
          >
            DeCiDe FoR Me😫
          </motion.button>
        </div>

        <div className="card-display">
          {showRandom && randomResult && randomResult.length > 0 && (
            <MealCard />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RandomDish;
