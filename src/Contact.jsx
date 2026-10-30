import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      Contact
      <p>
        <button onClick={handleClick}>Home Page</button>
      </p>
      <p>
        <Link to="/">Home Page</Link>
      </p>
    </div>
  );
}
