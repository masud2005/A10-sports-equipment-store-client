import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AllSportsEquipment from "../pages/AllSportsEquipment";
import AddEquipment from "../pages/AddEquipment";
import MyEquipmentList from "../pages/MyEquipmentList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import SportsEquipmentDetails from "../pages/SportsEquipmentDetails";
import PrivateRoute from "../components/PrivateRoute";
import UpdateEquipment from "../pages/UpdateEquipment";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-sports-equipment',
                element: <AllSportsEquipment />,
                loader: () => fetch('https://sports-equipment-store-server-alpha.vercel.app/equipments')
            },
            {
                path: '/sports-equipment/details/:id',
                element: <SportsEquipmentDetails />,
                loader: ({ params }) => fetch(`https://sports-equipment-store-server-alpha.vercel.app/equipments/${params.id}`)

            },
            {
                path: '/add-equipment',
                element: <PrivateRoute>
                    <AddEquipment />
                </PrivateRoute>
            },
            {
                path: '/my-equipment-list',
                element: <PrivateRoute>
                    <MyEquipmentList />
                </PrivateRoute>,
            },
            {
                path: '/update-equipment/:id',
                element: <UpdateEquipment />,
                loader: ({ params }) => fetch(`https://sports-equipment-store-server-alpha.vercel.app/equipments/${params.id}`)
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router;