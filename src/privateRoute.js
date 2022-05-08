import { useNavigate } from "react-router-dom";

const PrivateRoute = (props) => {
    const navigate = useNavigate();

    (() => {
        console.log('userRedirect:', props)
        !props.user && navigate('/login');
    })()

    console.log('user:', props.user)
    return (
        <>
            {props.user && props.children}
        </>
    )
}

export default PrivateRoute;