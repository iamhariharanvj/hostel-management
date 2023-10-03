import { Routes, Route } from 'react-router-dom';
import Complaints from '../pages/complaints/Complaints';
import Sidebar from '../layouts/Sidebar';
import LostAndFoundApp from '../pages/LostAndFound';
const StudentRoutes = () => {
    return (
        <div className="content flex">
            <Sidebar />
            <div className="main flex-grow">
                <Routes>
                    <Route path="/complaints" element={<Complaints />} />
                    <Route path="/lostandfound" element={<LostAndFoundApp />} />
                </Routes>
            </div>
        </div>
    );
};

export default StudentRoutes;
