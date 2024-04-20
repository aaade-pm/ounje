import { createContext, useState } from "react";
import PropTypes from "prop-types";

const MobileNavContext = createContext();

const MobileNavProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <MobileNavContext.Provider value={{ handleShowMenu, showMenu }}>
      {children}
    </MobileNavContext.Provider>
  );
};

MobileNavProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MobileNavContext, MobileNavProvider };
