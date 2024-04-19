import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/Layout"
import HomePage from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ForgetPassword from "../pages/ForgetPassword"
import Promotion from "../pages/Promotion"
import GameLog from "../pages/GameLog"
import History from "../pages/History"
import Profile from "../pages/Profile"
import ChangePassword from "../pages/ChangePassword"
import NewPlayerChangePassword from "../pages/NewPlayerChangePassword"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                index: true,
                element: <HomePage />
            },
            {
                path: '/promotion',
                element: <Promotion />,
            },
            {
                path: '/gamelog',
                element: <GameLog />,
            },
            {
                path: '/history',
                element: <History />,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
            
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/forget-password',
                element: <ForgetPassword />,
            },
            {
                path: '/change-password',
                element: <ChangePassword />,
            },
            {
                path: '/new-player-change-password',
                element: <NewPlayerChangePassword />,
            }
        ]
    }
])

export default router;