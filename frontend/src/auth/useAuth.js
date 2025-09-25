
// useAuth.js
import { useContext } from "react";
import AuthContext from "./AuthContext"; // adjust the path

const useAuth = () => useContext(AuthContext);

export default useAuth;
