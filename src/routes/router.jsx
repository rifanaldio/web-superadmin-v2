import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import ForgetPage from "../features/auth/ForgetPage";
import DashboardPage from "../features/dashboard/DashboardPage";
import GadaiTabunganEmas from "../features/gadai/gadai_tabungan_emas/GadaiTabunganEmas";
import Pages from "../pages/Pages";
import { URL } from "../util/Constant";

const router = createBrowserRouter([
    {
        path:`${URL}/login`,
        element : <Pages elemetPages={<LoginPage />} title="Login - Pegadaian" />,
    },
    {
        path:`${URL}/forget`,
        element : <Pages elemetPages={<ForgetPage />} title="Forget - Pegadaian" />,
    },
    {
        path:`${URL}/dashboard`,
        element : <Pages elemetPages={<DashboardPage />} title="Dashboard - Pegadaian" />,
    },
    {
        path:`${URL}/gadai_tabungan_emas`,
        element : <Pages elemetPages={<GadaiTabunganEmas />} title="Gadai Tabungan Emas - Pegadaian" />,
    },

])

export default router;