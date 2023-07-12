import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import ForgetPage from "../features/auth/ForgetPage";
import DashboardPage from "../features/dashboard/DashboardPage";
import GadaiTabunganEmas from "../features/gadai/gadai_tabungan_emas/GadaiTabunganEmas";

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
    {
        path:"/superadmin/gadai_tabungan_emas",
        element : <GadaiTabunganEmas />,
    },

])

export default router;