import axios from 'axios';
import React, { useContext, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context'
import "./settings.css"
export default function Settings() {
    const { user, dispatch } = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState(JSON.parse(localStorage.getItem("user")).username || null);
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem("user")).email || null);
    const [birth, setBirth] = useState(JSON.parse(localStorage.getItem("user")).birth || null)
    const [address, setAddress] = useState(JSON.parse(localStorage.getItem("user")).address || null);
    const [favoredfood, setFavoredfood] = useState(JSON.parse(localStorage.getItem("user")).favoredfood || null);
    const [password, setPassword] = useState(JSON.parse(localStorage.getItem("user")).password);
    const [success, setSuccess] = useState(false);
    const PF = "http://localhost:5000/images/"
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
            birth,
            favoredfood,
            address
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    };
    return (
        <div className="settings container">
            <div className="left-container">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Thông tin cá nhân
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete Account
                    </span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label style={{ textAlign: 'center' }}>Ảnh đại diện</label>
                    <div className="settingsPP">

                        <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="avatar" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user-astronaut"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <div className="test">
                        <div>
                            <label>Username</label>
                            <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />

                        </div>
                        <div>
                            <label>Ngày sinh</label>
                            <input type="text" placeholder={user.birth} onChange={(e) => setBirth(e.target.value)} />
                        </div>
                    </div>
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Địa chỉ</label>
                    <input type="text" placeholder={user.address} onChange={(e) => setAddress(e.target.value)} />
                    <label>Món ăn yêu thích</label>
                    <input type="text" placeholder={user.favoredfood} onChange={(e) => setFavoredfood(e.target.value)} />
                    <label>Password</label>
                    <input type="password" minlength="8" onChange={(e) => setPassword(e.target.value)} />
                    {success && <span className="UpdateSuccess">Cập nhật thành công !</span>}
                    <button className="settingsSubmit" type="submit">Cập nhật</button>
                </form>
            </div>
            <div className="right-container">
                <Sidebar />
            </div>
        </div>
    )
}
