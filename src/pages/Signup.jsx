import { Link } from "react-router-dom"
import '../styles/Signup.css';
import { SIGNUP_HEADING, USERNAME, MAIL, PASSWORD, CONFIRM_PASSWORD, SIGNUP_SUBMIT_BUTTON } from '../utils/constants';

function Signup({
        user,
        errors,
        handleChange,
        handleSubmit
    }) 
{
    return (
        <div className='form'>
                <h2>{SIGNUP_HEADING}</h2>
            <div className="form-content">
                <label>{USERNAME}</label>
                <input type='text' name='username' value={user.name} onChange={handleChange}/>
                <p className="error-text">{errors.username}</p>
            </div>
            <div className="form-content">
                <label>{MAIL}</label>
                <input type='text' name='email' value={user.mail} onChange={handleChange}/>
                <p className="error-text">{errors.email}</p>
            </div>
            <div className="form-content">
                <label>{PASSWORD}</label>
                <input type='password' name='password' value={user.password} onChange={handleChange}/>
                <p className="error-text">{errors.password}</p>
            </div>
            <div className="form-content">
                <label>{CONFIRM_PASSWORD}</label>
                <input type='password' name='confirmPassword' value={user.confirmPassword} onChange={handleChange}/>
                <p className="error-text">{errors.confirmPassword}</p>
            </div>
            <div className="form-content">
                <input type='submit' onClick={handleSubmit} value={SIGNUP_SUBMIT_BUTTON}/>
            </div>
            <p>
                Aleady have an account? <br />
                <Link to='/login' className="link"> Log in here </Link>
            </p>
        </div>
    )
}

export default Signup;