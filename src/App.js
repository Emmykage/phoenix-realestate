import './App.css';
import "./style.css"
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
import ClientsPage from './pages/Admin/clients/ClientsPage';
import AssetView from './pages/Admin/assets/AssetView';
import Family from './pages/categorypages/Family';
import StudioApartment from './pages/categorypages/Studio';
import Berlin from './pages/Berlin';
import Dubai from './pages/Dubai';
import Shangai from './pages/Shangai';
import Spain from './pages/Spain';
import Tokyo from './pages/Tokyo';
import UnitedKingdom from './pages/UnitedKingdom';
import Contact from './pages/Contact';
import Press from './pages/Press';
import PressPage from './pages/PressPage';
import AddPost from './pages/Admin/blog/AddPost';
import AccountSettings from './components/dashboard/Settings';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout><Home/></MainLayout>}/>
        <Route path="/properties" element={<MainLayout><Properties/></MainLayout>}/>
        <Route path="/contact" element={<MainLayout><Contact/></MainLayout>}/>
        <Route path="/press" element={<MainLayout><Press/></MainLayout>}/>
        <Route path="/press/:id" element={<MainLayout><PressPage/></MainLayout>}/>
        
        <Route path="/berlin" element={<MainLayout><Berlin/></MainLayout>}/>
        <Route path="/united_kingdom" element={<MainLayout><UnitedKingdom/></MainLayout>}/>
        
        <Route path="/dubai" element={<MainLayout><Dubai/></MainLayout>}/>
        <Route path="/shangai" element={<MainLayout><Shangai/></MainLayout>}/>
        <Route path="/spain" element={<MainLayout><Spain/></MainLayout>}/>
        <Route path="/tokyo" element={<MainLayout><Tokyo/></MainLayout>}/>
        <Route path="/family_homes" element={<MainLayout><Family/></MainLayout>}/>
        <Route path="/studio_homes" element={<MainLayout><StudioApartment/></MainLayout>}/>
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
          <Route path='settings' element={<AccountSettings/>}/>

        </Route>

        <Route path='auth'>
          <Route path='login' element={<Login/>}/>  
          <Route path='register' element={<Register/>}/>   
          <Route path='admin/login' element={<AdminLogin/>}/>   
          <Route path='admin/register' element={<AdminRegister/>}/>   


        </Route>
        <Route path={"/admin"}>
        <Route path='dashboard' element={<AdminLayout><AHome/></AdminLayout>}/>
        <Route path='assets' element={<AdminLayout><Assets/></AdminLayout>}/>
        <Route path='asset/:id' element={<AdminLayout><AssetView/></AdminLayout>}/>
        <Route path='clients' element={<AdminLayout><Clients/></AdminLayout>}/>
        <Route path='client/:id' element={<AdminLayout><ClientsPage/></AdminLayout>}/>
        <Route path='orders' element={<AdminLayout><Orders/></AdminLayout>}/>
        <Route path='analytics' element={<AdminLayout><Analytics/></AdminLayout>}/>
        <Route path='messages' element={<AdminLayout><AlertMessages/></AdminLayout>}/>
        <Route path='reports' element={<AdminLayout><Reports/></AdminLayout>}/>
        <Route path='settings' element={<AdminLayout><Settings/></AdminLayout>}/>
        <Route path='add_asset' element={<AdminLayout><AddAsset/></AdminLayout>}/>
        <Route path="add_blog" element={<AdminLayout><AddPost/></AdminLayout>}/>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
