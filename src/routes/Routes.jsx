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
                loader: () => fetch('http://localhost:5000/equipments')
            },
            {
                path: '/sports-equipment/details/:id',
                element: <PrivateRoute>
                    <SportsEquipmentDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/equipments/${params.id}`)

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
                loader: ({ params }) => fetch(`http://localhost:5000/equipments/${params.id}`)
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