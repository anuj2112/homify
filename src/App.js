import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './Pages/HomePage/Home'
import Login from './Pages/Login/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

         
      
      </Routes>
      </BrowserRouter>
  );
}

export default App;
