import axios from 'axios'
import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import "./login.css"

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { user, dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };
    console.log(user);
    return (
        <div className="login">
            <form className="loginForm" onSubmit={handleSubmit}>
                <span className="loginTitle">Đăng nhập</span>
                <div className="m-2">
                    <i className="loginIcon fas fa-user-astronaut"></i>
                    <input type="text" placeholder="Username" className="loginInput" required ref={userRef} />
                </div>
                <div className="m-2">
                    <i className="loginIcon fas fa-lock"></i>
                    <input type="password" placeholder="Mật khẩu" className="loginInput" required ref={passwordRef} />
                </div>
                <Link to="/register" className="link loginRegisterButton">Đăng kí</Link>
                <button className="loginButton" type="submit" disabled={isFetching}>Đăng nhập</button>
            </form>
        </div>
    )
}
