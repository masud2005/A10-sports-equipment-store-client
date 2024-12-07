import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import ThemeToggle from "../components/ThemeToggle";

const HomeLayout = () => {
    return (
        <div>

            {/* <header className="bg-gradient-to-r from-teal-200 via-blue-200 to-purple-300 text-gray-800 py-6">
                <Navbar />
            </header> */}
            <header className="sticky top-0 z-50 shadow-lg bg-opacity-60 backdrop-blur-md">
                <Navbar />
            </header>
            {/* <ThemeToggle /> */}

            <main className="min-h-[calc(100vh-321px)]">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    );
};

export default HomeLayout;