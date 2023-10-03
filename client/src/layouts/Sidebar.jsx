import { Link } from 'react-router-dom';

const sidebarLinks = [
    {
        title: 'Complaints',
        path: '/complaints',
    },
    {
        title: 'Apply Leave',
        path: '/leave',
    },
    {
        title: 'Lost and Found',
        path: '/lostAndFound',
    },
    {
        title: 'Report',
        path: '/report',
    },
];

const Sidebar = () => {
    return (
        <div className="bg-blue-900 text-white h-screen w-1/6 shadow-lg">
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Hostel Management</h2>
                <ul>
                    {sidebarLinks.map((link, index) => (
                        <li className="mb-2" key={index}>
                            <Link
                                to={link.path}
                                className="hover:text-blue-400 transition-colors duration-300"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
