import { useLocation } from 'react-router';

const Success = () => {
    const location = useLocation();
    const data = location.state.stripeData;
    const cart = location.state.cart;

    return (
        <div>
            success
        </div>
    );
};

export default Success;