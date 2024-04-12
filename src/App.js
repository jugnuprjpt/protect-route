import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar/Navbar';
import ProtectRoute from './Component/ProtectRoute/ProtectRoute';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter> 
      <Routes> 
          <Route path="/" exact element={<Login/> } /> 
          <Route element={<ProtectRoute/>}>
          <Route path="/" element={<About/> } /> 
          </Route>
       </Routes> 
   </BrowserRouter> 
     
    </div>
  );
}

export default App;
