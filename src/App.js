import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './pages/NavBar';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/signup' element={ <Signup/> }/>
        <Route path='/login' element={ <Login/> }/>
      </Routes>
    </Router>
  );
}

export default App;
