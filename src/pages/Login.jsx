import { Link } from "react-router-dom"
import '../styles/Login.css';
import { LOGIN_HEADING, USERNAME, PASSWORD, LOGIN_SUBMIT_BUTTON } from '../utils/constants';

function Login({
        userInput,
        errors,
        errorMessage,
        handleUsernameChange,
        handlePasswordChange,
        handleSubmit
    }) 
{
    const onFormSubmit = (event) => {
        event.preventDefault();
        
        handleSubmit();
    }

    return (
        <form className='form' onSubmit={onFormSubmit}>
                <h2>{LOGIN_HEADING}</h2>
            <div className="form-content">
                <label>{USERNAME}</label>
                <input type='text' name='username' value={userInput.name} onChange={handleUsernameChange}/>
                <p className="error-text">{errors.username}</p>
            </div>
            <div className="form-content">
                <label>{PASSWORD}</label>
                <input type='password' name='password' value={userInput.password} onChange={handlePasswordChange}/>
                <p className="error-text">{errors.password}</p>
            </div>
            <div className="form-content">
                <input type='submit' onClick={handleSubmit} value={LOGIN_SUBMIT_BUTTON}/>
                {errorMessage && (
                    <h3 className="error-text"> {errorMessage} </h3>
                )}
            </div>
            <p>
                <Link to='/login' className="link"> Forgot password? </Link>
            </p>
        </form>
    )
}

export default Login;