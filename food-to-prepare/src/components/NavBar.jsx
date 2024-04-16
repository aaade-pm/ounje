import { Link } from "react-router-dom";
import { GiSpoon } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa6";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="logo-and-link">
          <div className="logo">
            <h1>
              Ounjẹ
              <span>
                <GiSpoon className="spoon" />
              </span>
            </h1>
          </div>

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

        <div className="favorite">
          <h2>
            SAVED{" "}
            <span>
              <FaRegHeart className="heart" />
            </span>
          </h2>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
