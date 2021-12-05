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
                    {/* <a href="#" className="navbar-brand"> */}
                    <Link to="/" className="link navbar-brand">
                        <img src="images/review-logo-white.png" />
                    </Link>
                    {/* </a> */}

                    <div className="navbar-nav col-md-5 ms-auto ">
                        <i className="fas fa-search icon-search"></i>
                        <form>
                            <input type="text" name="user" className="form-control" id="Searchbox" placeholder="Tìm kiếm reviewer..." />
                        </form>
                    </div>

                    {user ? (
                        <>
                            <span className="WelcomeText">Xin chào {user.username} ! <i className="fas fa-heart"></i></span>
                            <button className="navbar-toggler navbar-nav-icon-ava" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapsibleNavbar">
                                {/* <span> <i className="fas fa-user-circle hamburger"></i></span> */}
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
                    {/* <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" onClick={handleLogout}>{
                                    user && "Log out"
                                }</a>
                            </li>
                            <li className="nav-link">
                            <Link to="/settings" className="link">Profile</Link>
                            </li>
                       
                            <li className="nav-link">
                            <Link to="/write" className="link">Tạo bài biết</Link>
                            </li>



                        </ul>
                    </div> */}

                </div>


            </nav >

        </div >
    )
}
