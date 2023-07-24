import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { URL } from './util/Constant';
import LoginPage from './features/auth/LoginPage';
import ForgetPage from './features/auth/ForgetPage';
import './index.css'
import DashboardPage from './features/dashboard/DashboardPage';
import GadaiTabunganEmas from './features/gadai/gadai_tabungan_emas/GadaiTabunganEmas';
import RulePerkiraanPinjaman from './features/gadai/rule_perkiraan_pinjaman/RulePerkiraanPinjaman';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path={`${URL}/login`} element={<LoginPage />} />
          <Route path={`${URL}/forget`} element={<ForgetPage />} />
          <Route path={`${URL}/dashboard`} element={<DashboardPage />}/>
          <Route path={`${URL}/gadai_tabungan_emas`} element={<GadaiTabunganEmas />} />
          <Route path={`${URL}/rule_perkiraan_pinjaman`} element={<RulePerkiraanPinjaman />}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
