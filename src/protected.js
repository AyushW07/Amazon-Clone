import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ childrens }) {
  let user = true;
  if (!user) {
    return <Navigate to="/" />;
  }

  return childrens;
}

export default Protected;
