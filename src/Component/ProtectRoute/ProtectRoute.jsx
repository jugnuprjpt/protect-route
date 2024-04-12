import { Outlet, useNavigate } from 'react-router-dom';

const ProtectRoute = () => {
  
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
    return (
         <Outlet /> 
    );
};

export default ProtectRoute;