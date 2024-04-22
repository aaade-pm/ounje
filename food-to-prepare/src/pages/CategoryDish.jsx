import NavBar from "../components/NavBar";
import { useContext } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { AnimatePresence, motion } from "framer-motion";

const CategoryDish = () => {
  const { categories } = useContext(CategoriesContext);
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: [0, 1],
      x: [-1240, 0],
      transition: { duration: 1, delay: 1 },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <NavBar />

        <motion.div className="category-dish">
          <h1>THE DIFFERENT CATEGORIES OF DISHES</h1>

          {categories.map((category) => (
            <motion.div
              key={category.idCategory}
              className="category"
              variants={variants}
              initial="initial"
              animate="animate"
            >
              <div className="category-image">
                <img src={category.strCategoryThumb} alt="" />
              </div>

              <div className="category-details">
                <h2>{category.strCategory}</h2>
                <p>{category.strCategoryDescription}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CategoryDish;
