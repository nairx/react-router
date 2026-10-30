import React from "react";
import { AppContext } from "./AppContextProvider";
import { useContext } from "react";
export default function Services() {
  const { user } = useContext(AppContext);
  return (
    <div>
      Services
      <p>Hello {user.name}</p>
    </div>
  );
}
