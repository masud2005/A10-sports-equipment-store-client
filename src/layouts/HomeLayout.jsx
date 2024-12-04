import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <header className="bg-gradient-to-r from-teal-200 via-blue-200 to-purple-300 text-gray-800 py-6">

                <Navbar />
            </header>
            <Outlet />
        </div>
    );
};

export default HomeLayout;