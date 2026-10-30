import React, { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext();
export default function AppContextProvider({ children }) {
  const [user, setUser] = useState({ name: "John", age: 21 });
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
