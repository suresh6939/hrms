import { useState } from "react";
import { FaAccusoft } from "react-icons/fa";
import { Link } from "react-router-dom";
import './index.css'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const changeUsername = event => {
        setUsername(event.target.value)
    }

    const changePassword = event => {
        setPassword(event.target.value)
    }


    return (
        <div className="homepage">
            <div className="login-form-container">
                <div className="login-header">
                    <FaAccusoft className="fa-icon-logo" />
                    <p className="login-text">HRMS Login Portal</p>
                </div>
                <form className="login-form">
                    <label htmlFor="username" className="label-name">
                        USERNAME
                    </label>
                    <div className="username-container">
                        <input
                            className="username-input"
                            value={username}
                            type="text"
                            id="username"
                            onChange={changeUsername}
                        />
                    </div>
                    <label htmlFor="password" className="label-password">
                        PASSWORD
                    </label>
                    <div className="password-container">
                        <input
                            className="username-input"
                            value={password}
                            type="text"
                            id="password"
                            onChange={changePassword}
                        />
                    </div>
                    <label>
                        <input
                            type="checkbox"
                        />
                        Remember Me
                    </label>
                    <div>
                        <button type="submit" className="login-btn">
                            Sing in
                        </button>
                    </div>
                    <p>If you don't have account please click here to <Link to={`/register`}>register</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login 