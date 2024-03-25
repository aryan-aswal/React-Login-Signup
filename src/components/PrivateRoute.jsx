import { useNavigate } from 'react-router-dom';
const PrivateRoute = (props) => {
    const navigate = useNavigate();
    if(props.isLoggedIn) {
        return props.children;
    } else {
        navigate('/login');
    }
}

export default PrivateRoute

