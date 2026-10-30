import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
export default function Home() {
  const { user } = useContext(AppContext);
  return (
    <div>
      Home
      <p>Hello {user.name}</p>
    </div>
  );
}
