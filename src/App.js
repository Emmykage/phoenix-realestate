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
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<MainLayout><Home/></MainLayout>}/>
        <Route path="/properties" element={<MainLayout><Properties/></MainLayout>}/>
        <Route path='/about' element={<MainLayout><About/></MainLayout>}/>
        <Route path='/faq' element={<MainLayout><FAQ/></MainLayout>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='wallet' element={<Main/>} >
            <Route path='wallet' element={<Transaction/>}/>
            <Route path='portfolios' element={<Portfolios/>}/>
            <Route path='bonuses' element={<Bonus/>}/>
          </Route>
          <Route path='account' element={<Account/>} />
          <Route path='reference' element={<References/>} />          
        </Route>

        <Route path='auth'>
          <Route path='login' element={<Login/>}/>   
          <Route path='register' element={<Login/>}/>   


        </Route>
        <Route path={"/admin"}>
          <Route path='dashboard' element={<AdminLayout><AHome/></AdminLayout>}/>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
