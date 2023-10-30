import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Properties from './pages/Properties';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Login from './pages/auth/Login';
import FAQ from './pages/FAQ';
import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<MainLayout><Home/></MainLayout>}/>
        <Route path="/properties" element={<MainLayout><Properties/></MainLayout>}/>
        <Route path='/about' element={<MainLayout><About/></MainLayout>}/>
        <Route path='/faq' element={<MainLayout><FAQ/></MainLayout>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

        <Route path='auth'>
          <Route path='login' element={<Login/>}/>   
          <Route path='register' element={<Login/>}/>   


        </Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
