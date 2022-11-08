import { Link } from "react-router-dom"
import '../styles/Login.css';
import { LOGIN_HEADING, USERNAME, PASSWORD, LOGIN_SUBMIT_BUTTON } from '../utils/constants';

function Login({
        user,
        errors,
        handleChange,
        handleSubmit
    }) 
{
    return (
        <div className='form'>
                <h2>{LOGIN_HEADING}</h2>
            <div className="form-content">
                <label>{USERNAME}</label>
                <input type='text' name='username' value={user.name} onChange={handleChange}/>
                <p className="error-text">{errors.username}</p>
            </div>
            <div className="form-content">
                <label>{PASSWORD}</label>
                <input type='password' name='password' value={user.password} onChange={handleChange}/>
                <p className="error-text">{errors.password}</p>
            </div>
            <div className="form-content">
                <input type='submit' onClick={handleSubmit} value={LOGIN_SUBMIT_BUTTON}/>
            </div>
            <p>
                <Link to='/login' className="link"> Forgot password? </Link>
            </p>
        </div>
    )
}

export default Login;