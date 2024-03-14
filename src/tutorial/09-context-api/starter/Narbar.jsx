import React, { createContext, useState } from "react";
import NavLinks from "./NavLinks";
export const NavbarContext = createContext();

const Narbar = () => {
  const [user, setUser] = useState({ name: "Bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <div className="navbar">
        <h5>Context API</h5>
        <NavLinks />
      </div>
    </NavbarContext.Provider>
  );
};

export default Narbar;
