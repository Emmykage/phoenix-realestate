import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Properties from './pages/Properties';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Login from './pages/auth/Login';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/properties" element={<Properties/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/faq' element={<FAQ/>}/>

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
