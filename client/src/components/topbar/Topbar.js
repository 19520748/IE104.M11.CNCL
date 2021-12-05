import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./topbar.css"
export default function Topbar() {
    const PF = "http://localhost:5000/images/"
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }

    return (
        <div className="NavbarAfterLogin">

            <nav className="navbar  TC-sticky fixed-top r-nav TC-navbar">
                <div className="container-fluid">
                    <Link to="/" className="link navbar-brand">
                        <img src="images/review-logo-white.png" />
                    </Link>

                    <div className="navbar-nav col-md-5 ms-auto ">
                        <i className="fas fa-search icon-sreach"></i>
                        <input type="text" className="form-control" id="Searchbox" placeholder="Tìm kiếm địa điểm..." />
                    </div>

                    {user ? (
                        <>
                            <span className="WelcomeText">Xin chào {user.username} ! <i style={{color: 'orangered'}} className="fas fa-heart"></i></span>
                            <button className="navbar-toggler navbar-nav-icon-ava" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsibleNavbar">
                                <img src={PF + user.profilePic} alt="" />

                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-link">
                                        <a className="link" onClick={handleLogout}>{user && ""}Log out</a>
                                    </li>
                                    <li className="nav-link">
                                        <Link to="/settings" className="link">Profile</Link>
                                    </li>

                                    <li className="nav-link">
                                        <Link to="/write" className="link">Tạo bài biết</Link>
                                    </li>



                                </ul>
                            </div>
                        </>
                    ) : (

                        <Link to="/login" className="link loginUser">Đăng nhập</Link>


                    )}

                </div>


            </nav >

        </div >
    )
}
