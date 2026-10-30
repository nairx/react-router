import React from "react";
import { useRouteError } from "react-router-dom";
export default function ErrorGlobal() {
  const error = useRouteError();
  return (
    <div>
      ErrorGlobal
      <p>{error.message}</p>
    </div>
  );
}
