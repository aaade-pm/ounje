import { Link } from "react-router-dom";
import { GiSpoon } from "react-icons/gi";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import { useContext } from "react";
import FavoriteMeals from "./FavoriteMeals";
import { SavedMealContext } from "../contexts/SavedMealContext";
import MobileNav from "./MobileNav";
import { MobileNavContext } from "../contexts/MobileNavContext";
import { motion } from "framer-motion";

const NavBar = () => {
  const { savedMeals, handleShowFavorites, showFavorites } =
    useContext(SavedMealContext);
  const { handleShowMenu, showMenu } = useContext(MobileNavContext);

  return (
    <motion.div>
      {showMenu && <MobileNav />}

      <nav>
        <div className="logo-and-link">
          <motion.div
            className="logo"
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: [0, 1],
              x: [-20, 0],
              transition: { duration: 1 },
            }}
          >
            <h1>
              Ounjẹ
              <span>
                <GiSpoon className="spoon" />
              </span>
            </h1>
          </motion.div>

          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>

            <li>
              <Link to="/country-dish">COUNTRY DISH</Link>
            </li>
            <li>
              <Link to="/category-dish">CATEGORIES</Link>
            </li>
            <li>
              <Link to="/random-dish">RANDOM DISH</Link>
            </li>
          </ul>
        </div>

        <motion.div
          className="favorite"
          animate={{
            opacity: [0, 1],
            x: [20, 0],
            transition: { duration: 1 },
          }}
        >
          <h2 className="favorite-handler" onClick={handleShowFavorites}>
            SAVED MEALS
            <span>
              {savedMeals.length > 0 ? (
                <FaHeart className="white-heart" />
              ) : (
                <FaRegHeart className="heart" />
              )}
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="menu"
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: [0, 1],
            x: [20, 0],
            transition: { duration: 1 },
          }}
        >
          <HiMenuAlt3 className="menu-bar" onClick={handleShowMenu} />
        </motion.div>
      </nav>
      {showFavorites && (
        <div className="favorite-wrapper">
          <FavoriteMeals />
        </div>
      )}
    </motion.div>
  );
};

export default NavBar;
