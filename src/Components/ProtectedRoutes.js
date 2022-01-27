import React from "react";
import { Navigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function ProtectedRoutes({ children }) {
  let { user } = useStateValue();
  return (
    <div>
      {user ? children : <Navigate to="/login" />}
      {console.log(user?.email)}
    </div>
  );
}

export default ProtectedRoutes;
