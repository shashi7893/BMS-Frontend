import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const LoginContainer = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const validate = (name, value) => {
        let errorText = '';
        switch (name) {
            case 'username':
                if(value.length <= 4){
                    errorText = 'Username atleast have 5 letters';
                }
                break;      
            case 'password':
                if(
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ){
                    errorText = 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers';
                }
                break;
            default:
                break;
        }
        setErrors(prevErrors => (
            {
                ...prevErrors,
                [name]: errorText
            }
        ));
    }

    const handleChange = (e) => {
        e.preventDefault();
        setUser(prevUser => (
            {
                ...prevUser,
                [e.target.name]: e.target.value
            }
        ));
        validate(e.target.name, e.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        for (const property in errors) {
            if(errors[property].length !== 0){
                isValid = false;
                break;
            }
        }
        for (const property in user) {
            if(user[property].length === 0){
                isValid = false;
                break;
            }
        }
        if(isValid){
            navigate('/home');
        }else{
            alert("Please fill all the fields");
        }
      }

    return (<>
            <Login
                user = {user}
                errors = {errors}
                handleChange = {handleChange}
                handleSubmit = {handleSubmit}
            />
        </>);
}

export default LoginContainer;