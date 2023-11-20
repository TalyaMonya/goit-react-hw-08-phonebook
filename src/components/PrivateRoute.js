import { useAuth } from "hooks/useAuth"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn, isRfreshing } = useAuth();

    const shouldRedirect = !isLoggedIn && !isRfreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};