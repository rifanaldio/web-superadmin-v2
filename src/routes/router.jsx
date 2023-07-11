import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import ForgetPage from "../features/auth/ForgetPage";
import DashboardPage from "../features/dashboard/DashboardPage";

const router = createBrowserRouter([
    {
        path:"/superadmin/login",
        element : <LoginPage />,
    },
    {
        path:"/superadmin/forget",
        element : <ForgetPage />,
    },
    {
        path:"/superadmin/dashboard",
        element : <DashboardPage />,
    },

])

export default router;