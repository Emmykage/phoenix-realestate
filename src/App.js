import './App.css';
import Home from './pages/Home';
import Properties from './pages/Properties';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Login from './pages/auth/Login';
import FAQ from './pages/FAQ';
import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';
import Account from './components/dashboard/Account';
import References from './components/dashboard/References';
import Main from './components/dashboard/Main';
import Portfolios from './components/dashboard/Portfolios';
import Bonus from './components/dashboard/Bonus';
import Transaction from './components/dashboard/Transaction';
import AHome from './pages/Admin/AdminHome';
import AdminLayout from './layouts/AdminLayout';
import AdminLogin from './pages/auth/AdminLogin';
import AdminRegister from './pages/auth/AdminRegister';
import Register from './pages/auth/Register';
import UserLayout from './layouts/UserLayouts';
import Assets from './pages/Admin/assets/Assets';
import Clients from './pages/Admin/clients/Clients';
import Orders from './pages/Admin/orders/Orders';
import Analytics from './pages/Admin/analytics/Analytics';
import AlertMessages from './pages/Admin/messages/AlertMessages';
import Reports from './pages/Admin/reports/Reports';
import Settings from './pages/Admin/settings/Settings';
import AddAsset from './pages/Admin/assets/AddAsset';
import AssetDetails from './pages/AssetDetails';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout><Home/></MainLayout>}/>
        <Route path="/properties" element={<MainLayout><Properties/></MainLayout>}/>
        <Route path="/assets_details/:id" element={<MainLayout><AssetDetails/></MainLayout>}/>

        <Route path='/about' element={<MainLayout><About/></MainLayout>}/>
        <Route path='/faq' element={<MainLayout><FAQ/></MainLayout>}/>
        <Route path='/dashboard' element={<UserLayout><Dashboard/></UserLayout> }>
          <Route path='wallet' element={<Main/>}>
            <Route path='wallet' element={<Transaction/>}/>
            <Route path='portfolios' element={<Portfolios/>}/>
            <Route path='bonuses' element={<Bonus/>}/>
          </Route>
          <Route path='account' element={<Account/>} />
          <Route path='reference' element={<References/>} />          
        </Route>

        <Route path='auth'>
          <Route path='login' element={<Login/>}/>  
          <Route path='register' element={<Register/>}/>   
          <Route path='login' element={<AdminLogin/>}/>   
          <Route path='register' element={<AdminRegister/>}/>   


        </Route>
        <Route path={"/admin"}>
        <Route path='dashboard' element={<AdminLayout><AHome/></AdminLayout>}/>
        <Route path='assets' element={<AdminLayout><Assets/></AdminLayout>}/>
        <Route path='clients' element={<AdminLayout><Clients/></AdminLayout>}/>
        <Route path='orders' element={<AdminLayout><Orders/></AdminLayout>}/>
        <Route path='analytics' element={<AdminLayout><Analytics/></AdminLayout>}/>
        <Route path='messages' element={<AdminLayout><AlertMessages/></AdminLayout>}/>
        <Route path='reports' element={<AdminLayout><Reports/></AdminLayout>}/>
        <Route path='settings' element={<AdminLayout><Settings/></AdminLayout>}/>
        <Route path='add_asset' element={<AdminLayout><AddAsset/></AdminLayout>}/>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
