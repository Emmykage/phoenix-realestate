import './App.css';
import "./style.css"
import Home from './pages/Home';
import Properties from './pages/property-listing';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Login from './pages/auth/Login';
import FAQ from './pages/FAQ';
import MainLayout from './layouts/MainLayout';
import References from './components/dashboard/References';

import AHome from './pages/Admin/AdminHome';
import AdminLayout from './layouts/AdminLayout';
import AdminLogin from './pages/auth/AdminLogin';
import AdminRegister from './pages/auth/AdminRegister';
import Register from './pages/auth/Register';
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
import Contact from './pages/contact/Contact';
import AddPost from './pages/Admin/blog/AddPost';
import AccountSettings from './components/dashboard/Settings';
import PortfolioItems from './pages/Admin/clients/PortfolioItems';

import ViewImage from './pages/ViewImage';
import Blog from './pages/blog';
import BlogPost from './pages/blog/blogPost/BlogPost';
import useInitializer from './hooks/useInitializer';
import DashboardHome from './pages/dashboard/account/Account';
import DashboardLayout from './layouts/DashboardLayout';
import Offering from './pages/dashboard/Offering';
import Portfolio from './pages/dashboard/portfolio/Portfolio';
import DashboardDocument from './pages/dashboard/Document';
import Identity from './components/user/Identity';
import AccountProfile from './components/user/Profile';
import ProfileAccount from './components/user/Account';
import PaymentMethods from './components/user/PaymentMethods';
import AccountDeposit from './pages/dashboard/account/Deposit';
import History from './pages/dashboard/portfolio/History';
import Pending from './pages/dashboard/portfolio/Pending';
import AccountInvestment from './pages/dashboard/portfolio/Investment';
import AccountWithdraw from './pages/dashboard/account/WithdrawPage';
import LoadingComponent from './components/loadingComp/LoadingComponent';
import { useSelector } from 'react-redux';
import AboutPhoenixPrecast from './pages/about/PhoenixPrecast';
import OurTeam from './pages/about/Team';
import PassiveIncome from './pages/opportunities/PassiveIncome';
import HowItWorks from './pages/opportunities/HowItWorks';
function App() {
  const {loader} = useSelector(state => state.app)
  useInitializer()
  return (
    <div className="App">
      {loader && 
      <LoadingComponent/>
}
      <Routes>
      <Route path='about-us' element={<MainLayout> <About/></MainLayout>} />
      <Route path='why-phoenix' element={<MainLayout> <AboutPhoenixPrecast/> </MainLayout>} />
      <Route path='our-team' element={<MainLayout> <OurTeam/> </MainLayout>} />
      <Route path='passive-income' element={<MainLayout> <PassiveIncome/> </MainLayout>} />
      <Route path='how-it-work' element={<MainLayout> <HowItWorks/> </MainLayout>} />
      <Route path='faq' element={<MainLayout> <FAQ/> </MainLayout>} />


      <Route path='/dashboard' element={<><DashboardLayout/></> }>
      <Route path='home' element={<DashboardHome/>} />
      <Route path='account' element={<DashboardHome/>}>
          <Route path='deposit' element={<AccountDeposit/>}/>
          <Route path='identity' element={<Identity/>}/>
          <Route path='profile' element={<AccountProfile/>}/>
          <Route path='' index element={<ProfileAccount/>}/>
          <Route path='payment-method' element={<PaymentMethods/>}/>
          <Route path='withdraw' element={<AccountWithdraw/>}/>
        </Route>
        <Route path='document' element={<DashboardDocument/>} />
        <Route path='portfolio' element={<Portfolio/>}>
          <Route path='' element={<AccountInvestment/>}/>
          <Route path='investments' element={<AccountInvestment/>}/>
          <Route path='history' element={<History/>}/>
          <Route path='pending' element={<Pending/>}/>

        </Route>
        <Route path='offering' element={<Offering/>} />
        </Route>
        <Route path="/" element={<MainLayout><Home/></MainLayout>}/>
        <Route path="/properties" element={<MainLayout><Properties/></MainLayout>}/>
        <Route path="/contact-us" element={<MainLayout><Contact/></MainLayout>}/>
        <Route path="/press-release" element={<MainLayout><Blog/></MainLayout>}/>
        <Route path="/press-release/:id" element={<MainLayout><BlogPost/></MainLayout>}/>
        
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
        
        {/* <Route path='/dashboard' element={<UserLayout><Dashboard/></UserLayout> }/>
        <Route path='/dashboard/deposit' element={<UserLayout><DepositPage/></UserLayout>}/>
        <Route path='/dashboard/withdraw' element={<UserLayout><WithdrawPage/></UserLayout>}/>
        <Route path='/dashboard/wallet' element={<UserLayout> <Wallet/></UserLayout>}>
            <Route path='wallet' element={<><Transaction/></>}/>
            <Route path='portfolios' element={<><Portfolios/></>}/>
            <Route path='bonuses' element={<Bonus/>}/>
         </Route>
            <Route path='/dashboard/account' element={<UserLayout><Account/></UserLayout>} /> */}
            <Route path='reference' element={<References/>} />          
            <Route path='settings' element={<AccountSettings/>}/>


        <Route path='auth'>
          <Route path='login' element={<Login/>}/>  
          <Route path='register' element={<Register/>}/>   
          <Route path='admin_login' element={<AdminLogin/>}/>   
          <Route path='admin/register' element={<AdminRegister/>}/>   


        </Route>
        <Route path={"/admin"}>
        <Route path='dashboard' element={<AdminLayout><AHome/></AdminLayout>}/>
        <Route path='assets' element={<AdminLayout><Assets/></AdminLayout>}/>
        <Route path='asset/:id' element={<AdminLayout><AssetView/></AdminLayout>}/>
        <Route path='clients' element={<AdminLayout><Clients/></AdminLayout>}/>
        <Route path='client/:id' element={<AdminLayout><ClientsPage/></AdminLayout>}/>
        <Route path='transaction/:id' element={<AdminLayout><ViewImage/></AdminLayout>}/>
        <Route path='client/:client_id/portfolio/:portfolio_id' element={<AdminLayout><PortfolioItems/></AdminLayout>}/>
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
