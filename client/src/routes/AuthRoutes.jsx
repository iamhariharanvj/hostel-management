import { Route, Routes } from 'react-router-dom';

const AuthRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<div>HomePage</div>} />
        </Routes>
    );
};

export default AuthRoutes;
