import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
export default function About() {
  const { user, setUser } = useContext(AppContext);
  const [ txt, setTxt ] = useState();
  const handleUpdate = () => {
    console.log(user.name)
    setUser({ ...user, name: txt });
  };
  return (
    <div>
      About
      <p>Hello {user.name}</p>
      <p>
        <input type="text" onChange={(e) => setTxt(e.target.value)} />
        <button onClick={handleUpdate}>Update</button>
      </p>
    </div>
  );
}
