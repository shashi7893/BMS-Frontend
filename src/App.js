import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './pages/NavBar';
import SignupContainer from './pages/SignupContainer';
import Home from './pages/Home';
import LoginContainer from './pages/LoginContainer';
import Dashboard from './pages/Dashboard';

function App() {
    return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/signup' element={ <SignupContainer/> }/>
          <Route path='/login' element={ <LoginContainer/> }/>
          <Route path='/home' element={ <Home/> }/>
          <Route path='/dashboard' element={ <Dashboard/>}/>
        </Routes>
      </Router>
    );
}

export default App;
