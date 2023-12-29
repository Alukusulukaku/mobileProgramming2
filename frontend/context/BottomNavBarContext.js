import React, { createContext, useState, useContext } from "react";

const BottomNavBarContext = createContext();

export const BottomNavBarProvider = ({ children }) => {
  const [tabBarVisible, setTabBarVisible] = useState(true);

  return (
    <BottomNavBarContext.Provider value={{ tabBarVisible, setTabBarVisible }}>
      {children}
    </BottomNavBarContext.Provider>
  );
};

export const useBottomNavBar = () => {
  const context = useContext(BottomNavBarContext);
  if (!context) {
    throw new Error(
      "useBottomNavBar must be used within a BottomNavBarProvider"
    );
  }
  return context;
};
