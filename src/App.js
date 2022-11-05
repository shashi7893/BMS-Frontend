import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './pages/NavBar';
import SignupContainer from './pages/SignupContainer';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
    return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/signup' element={ <SignupContainer/> }/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/home' element={ <Home/> }/>
        </Routes>
      </Router>
    );
}

export default App;
