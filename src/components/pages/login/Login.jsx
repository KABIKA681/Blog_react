import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
     <img className="loginLogo" src="https://logodix.com/logo/1702871.png" alt=""/>
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
        <span className="loginRegisterSpan">Not yet Registered?</span>
        <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  );
}



// import "./login.css"
// import { Link } from "react-router-dom"
// import { useContext, useRef } from "react";
// import { Context } from "../../../context/Context";
// import axios from "axios"

// export default function Login() {
   
//     const userRef = useRef();
//     const passwordRef = useRef()
//     const { user, dispatch, isFetching } = useContext(Context)

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         dispatch({ type: "LOGIN_START" });
//         try {
//             const res = await axios.post("/auth/login", {
//                 username: userRef.current.value,
//                 password: passwordRef.current.value,
//             })
//             dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

//         } catch (err) {
//             dispatch({ type: "LOGIN_FAILURE", });

//         }
//     };
//     console.log(user)
//         return (
//             <div className="login">
//                 <img className="loginLogo" src="https://logodix.com/logo/1702871.png" alt="" />
            
//                 <span className="loginTitle">Login</span>
//                 <div className="loginForm" onSubmit={handleSubmit}>
//                     <label>Username</label>
//                     <input type="text" className="loginInput"
//                         placeholder="Enter your Username..."
//                         ref={userRef}
//                     />
//                     <label >Password</label>
//                     <input type="password" className="loginInput"
//                         placeholder="Enter your password..."
//                         ref={passwordRef}

//                     />
//                     <button className="loginButton" type="submit" disabled={isFetching }>
//                         Login
//                     </button>
//                 </div>
//                 <span className="loginRegisterSpan">Not yet Registered?</span>
//                 <button className="loginRegisterButton">
//                     <Link className="link" to="/register">Register</Link>
//                 </button>
//             </div>
//         )
//     }
