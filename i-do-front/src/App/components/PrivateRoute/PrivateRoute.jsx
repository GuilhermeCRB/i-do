import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "../../../Contexts/UserContext";

const PrivateRoute = ({ children }) => {
    const { token } = useContext(UserContext);

    if(!token){
        alert("Token expired. You will be redirected to sign in page.");
        
        return <Navigate to="/sign-in" />;
    }

    return children;
};

export default PrivateRoute;