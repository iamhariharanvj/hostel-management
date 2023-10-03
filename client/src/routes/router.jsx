import { BrowserRouter } from 'react-router-dom';
import AuthRoutes from './AuthRoutes';
import StudentRoutes from './StudentRoutes';

const Router = () => {
    return (
        <BrowserRouter>
            <AuthRoutes />
            <StudentRoutes />
        </BrowserRouter>
    );
};

export default Router;
