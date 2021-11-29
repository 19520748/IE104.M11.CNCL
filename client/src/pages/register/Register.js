import React, { useState } from 'react'
import "./register.css"
import { Link } from "react-router-dom"
import axios from 'axios'

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birth, setBirth] = useState("");
    const [favoredfood, setFavoredfood] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {

        e.preventDefault();
        setError(false);
        try {

            const res = await axios.post("/auth/register", {
                username, email, password, birth, favoredfood, address,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true)
        }

    };
    return (
        <div className="register">
            <div className="registerColumn">
                <div className="registerColumn1">
                    <img src="https://media.istockphoto.com/photos/slice-of-pizza-cheese-crust-seafood-topping-sauce-with-bell-pepper-picture-id835271096?k=20&m=835271096&s=612x612&w=0&h=slpW4QOVnDLlv6ayevlxwtcOIKCjTvOwxe7BZBOMmvc=" />
                </div>
                <div className="registerColumn2">

                    <form className="registerForm" onSubmit={handleSubmit}>
                        <span className="registerTitle">Đăng kí</span>
                        <label>Username</label>
                        <i className="registerUserIcon fas fa-user-astronaut"></i>
                        <input type="text" placeholder="Username của bạn" className="registerInput"
                            onChange={e => setUsername(e.target.value)}
                        />
                        <label>Ngày sinh</label>
                        <i className="registerBirthIcon fas fa-birthday-cake"></i>
                        <input type="text" placeholder="Ngày sinh của bạn" className="registerInput"
                            onChange={e => setBirth(e.target.value)}
                        />
                        <label>Email</label>
                        <i className="registerEmailIcon fas fa-envelope"></i>
                        <input type="text" placeholder="Email của bạn" className="registerInput"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label>Địa chỉ</label>
                        <i className="registerAddressIcon fas fa-map-marker-alt"></i>
                        <input type="text" placeholder="Địa chỉ" className="registerInput"
                            onChange={e => setAddress(e.target.value)} />

                        <label>Món ăn yêu thích</label>
                        <i className="registerFavorIcon fas fa-pizza-slice"></i>
                        <input type="text" placeholder="Món ăn yêu thích" className="registerInput"
                            onChange={e => setFavoredfood(e.target.value)} />
                        <label>Password</label>
                        <i className="registerPasswordIcon fas fa-lock"></i>
                        <input type="password" placeholder="Mật khẩu" className="registerInput"
                            onChange={e => setPassword(e.target.value)} />
                        <button className="registerButton" type="submit">Đăng kí</button>
                        {error && <span className="errorAppear">Oops...! Có vẻ như tài khoản đã tồn tại rồi <i className="fas fa-heart-broken"></i></span>}
                    </form>
                    {/* <a className="registerLoginButton"> */}
                    <Link to="/login" className="link registerLoginButton">Đăng nhập</Link>

                    {/* </a> */}
                </div>

            </div>

        </div>
    )
}
