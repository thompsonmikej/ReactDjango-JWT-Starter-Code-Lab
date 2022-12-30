import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoggedInUser = ({ children }) => {
  const [user] = useAuth();
  return user.username === null ? null : children;
};

export default LoggedInUser;
