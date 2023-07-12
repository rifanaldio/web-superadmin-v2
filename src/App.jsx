import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './features/auth/LoginPage';
import ForgetPage from './features/auth/ForgetPage';
import './index.css'
import DashboardPage from './features/dashboard/DashboardPage';
import GadaiTabunganEmas from './features/gadai/gadai_tabungan_emas/GadaiTabunganEmas';
function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/superadmin/login' element={<LoginPage />} />
          <Route path='/superadmin/forget' element={<ForgetPage />} />
          <Route path='/superadmin/dashboard' element={<DashboardPage />} />
          <Route path='/superadmin/gadai_tabungan_emas' element={<GadaiTabunganEmas />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
