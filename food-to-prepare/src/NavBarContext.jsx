import {createContext} from 'react'

const NavBarContext = createContext();

const NavBarProvider = ({children}) => {
  return (
    <NavBarContext.Provider value={}>
      {children}
    </NavBarContext.Provider>
  )
}

export default NavBarProvider