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
            <form className="registerForm" onSubmit={handleSubmit}>
                <span className="registerTitle">Đăng kí</span>
                {error && <span className="errorAppear">Oops...! Có vẻ như tài khoản đã tồn tại rồi <i className="fas fa-heart-broken"></i></span>}
                <div style={{ margin: 8 }}>
                    <i className="registerIcon fas fa-user-astronaut"></i>
                    <input type="text" placeholder="Username của bạn" required className="registerInput"
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div style={{ margin: 8 }}>
                    <i className="registerIcon fas fa-birthday-cake"></i>
                    <input type="text" placeholder="Ngày sinh của bạn" required className="registerInput"
                        onChange={e => setBirth(e.target.value)}
                    />
                </div>
                <div style={{ margin: 8 }}>
                    <i className="registerIcon fas fa-envelope"></i>
                    <input type="text" placeholder="Email của bạn" required className="registerInput"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div style={{ margin: 8 }}>
                    <i className="registerIcon fas fa-map-marker-alt"></i>
                    <input type="text" placeholder="Địa chỉ" required className="registerInput"
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <div style={{ margin: 8 }}>
                    <i className="registerIcon fas fa-pizza-slice"></i>
                    <input type="text" placeholder="Món ăn yêu thích" required className="registerInput"
                        onChange={e => setFavoredfood(e.target.value)}
                    />
                </div>
                <div style={{ margin: 8 }}>
                    <i className="registerIcon fas fa-lock"></i>
                    <input type="password" placeholder="Mật khẩu" minlength="8" required className="registerInput"
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <button className="registerButton" type="submit">Đăng kí</button>
            </form>
        </div>
    )
}
