import React from "react";
import { Route, useNavigate } from "react-router-dom";
import { useAuth } from "./components/context/auth";
function PrivateRoute({ component: Component, ...rest }) {
    const { authTokens } = useAuth();

    const navigate = useNavigate();


    return (<>
        <Route
            {...rest}
            render={props =>
                authTokens ? (
                    <Component {...props} />
                ) : (
                    navigate("/login", { replace: true })
                )
            }
        />
    </>

    );
}

export default PrivateRoute;