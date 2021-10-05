import "./register.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="login">
            <img className="loginLogo" src="https://logodix.com/logo/1702871.png" alt=""/>
            <span className="loginTitle">Register</span>
            <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Create your username..."
                    onChange={e =>setUsername(e.target.value)}
                />
                <label >Email</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Enter your email..."
                    onChange={e =>setEmail(e.target.value)}

                />
                <label >Create Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="password..."
                    onChange={e =>setPassword(e.target.value)}

                />
                <button className="loginButton" type="submit" >Register</button>
            </form>
            <span className="loginRegisterSpan">Already Registered?</span>
            <button className="loginRegisterButton">
            <Link className="link" to="/login">Login</Link>

            </button>
            {error && <span style={{color:"tomato", marginTop:"20px", fontFamily:" 'Josefin Sans', sans-serif", fontSize:"20px"}}> Something went wrong!</span>}
        </div>
    )
}
