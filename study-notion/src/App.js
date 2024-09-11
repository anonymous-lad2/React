import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Template from './components/Template';

function App() {
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
      <Navbar></Navbar>

      {/* <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path='/login' element={<Login/>} />

        <Route path='/signup' element={<Signup />} />
      </Routes>  */}

      <Login />
    </div>
  );
}

export default App;
