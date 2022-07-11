import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    toast.error("please login or register");
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
