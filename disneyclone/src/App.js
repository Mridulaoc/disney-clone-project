import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Detail from './components/Detail';


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Login />} />  
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} /> 
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
