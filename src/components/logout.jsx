import { useNavigate } from "react-router-dom";

const LogOut = (props) => {
  localStorage.removeItem("token");
  props.setUser(null);
  const navigate = useNavigate();
  navigate("/", { replace: true });
  return null;
};

export default LogOut;
