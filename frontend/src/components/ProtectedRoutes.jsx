import { Navigate } from "react-router-dom";

export const PrivateRoute = ({element, isAuthencated}) => {
    return isAuthencated ? element : <Navigate to="/login" />
}


export const PublicRoute = ({element, isAuthencated}) => {
    return isAuthencated ? <Navigate to="/"/> : element;
}