import axios from 'axios'
import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import "./login.css"

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { user,dispatch, isFetching } = useContext(Context);

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
            <div className="loginColumn">
                <div className="loginColumn1">
                    <img src="https://media.istockphoto.com/photos/banh-mi-sandwich-classic-japanese-vietnamese-or-thai-cuisine-favorite-picture-id1256921788?b=1&k=20&m=1256921788&s=170667a&w=0&h=ekBhjCcLRU3RwK_Xn7LI3dCQCZD29fYa1-IWb2xfiE8=" />
                </div>
                <div className="loginColumn2">

                    <form className="loginForm" onSubmit={handleSubmit}>
                        <span className="loginTitle">Đăng nhập</span>
                        <label>Username</label>
                        <i className="loginUserIcon fas fa-user-astronaut"></i>
                        <input type="text" placeholder="Username của bạn" className="loginInput" ref={userRef} />
                        <label>Password</label>
                        <i className="loginPasswordIcon fas fa-lock"></i>
                        <input type="password" placeholder="Mật khẩu" className="loginInput" ref={passwordRef} />
                        <button className="loginButton" type="submit" disabled={isFetching}>Đăng nhập</button>
                    </form>
                    {/* <a className="loginRegisterButton">
                        <Link to="/register" className="link">Đăng kí</Link>
                    </a> */}
                    <Link to="/register" className="link loginRegisterButton">Đăng kí</Link>
                </div>

            </div>

        </div>
    )
}
