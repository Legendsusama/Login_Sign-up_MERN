


import { Navigate } from "react-router-dom";
import useAuth   from "./utils/useAuth";

const PublicRoute = ({ children }) => {
  const { auth } = useAuth();

  return auth.token ? <Navigate to="/" /> : children;
};

export default PublicRoute;
