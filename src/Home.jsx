import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContextProvider";
export default function Home() {
  const { user } = useContext(AppContext);
  return (
    <div>
      Home
      <p>Hello {user.name}</p>

      <div>
        <Link to="/product-details/1">Product-1</Link>
      </div>
       <div>
        <Link to="/product-details/2">Product-2</Link>
      </div>
       <div>
        <Link to="/product-details/3">Product-3</Link>
      </div>
    </div>
  );
}
