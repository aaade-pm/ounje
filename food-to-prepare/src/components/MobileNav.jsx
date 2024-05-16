import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { MobileNavContext } from "../contexts/MobileNavContext";
import { useContext } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { SavedMealContext } from "../contexts/SavedMealContext";
const MobileNav = () => {
  const { handleShowMenu } = useContext(MobileNavContext);
  const { savedMeals, handleShowFavorites } = useContext(SavedMealContext);

  return (
    <>
      <div className="mobile-nav">
        <MdOutlineRestaurantMenu
          className="menu-icon"
          onClick={handleShowMenu}
        />
        <ul>
          <li>
            <Link to="/" onClick={handleShowMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/country-dish" onClick={handleShowMenu}>
              COUNTRY DISH
            </Link>
          </li>
          <li>
            <Link to="/category-dish" onClick={handleShowMenu}>
              CATEGORIES
            </Link>
          </li>
          <li>
            <Link to="/random-dish" onClick={handleShowMenu}>
              RANDOM DISH
            </Link>
          </li>
          <div className="mobile-favorite">
            <h2
              className="mobile-favorite-handler"
              onClick={handleShowFavorites}
            >
              SAVED MEALS
              <span>
                {savedMeals.length > 0 ? (
                  <FaHeart className="mobile-heart" />
                ) : (
                  <FaRegHeart className="mobile-heart" />
                )}
              </span>
            </h2>
          </div>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
