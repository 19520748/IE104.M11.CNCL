import "./about.css"
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer"



export default function About() {
    // var btnOpen = document.querySelector('.open-model-btn');
    // var model = document.querySelector('.model');
    // var iconClose = document.querySelector('.model__header');
    // var btnClose = document.querySelector('.model__footer button');
    // function toggleModel(e) {
    //     console.log(e.target);
    //     model.classList.toggle('hide');
    // }

    // btnOpen.addEventListener('click', toggleModel)
    // btnClose.addEventListener('click', toggleModel)
    // iconClose.addEventListener('click', toggleModel)
    // model.addEventListener('click', function (e) {
    //     if (e.target == e.currentTarget) {
    //         toggleModel();
    //     }
    // })


    return (
        <>

            <Header />
            <div className="grid">
                <div className="intro">
                    <h1>Introduction</h1>
                    <div class="intro__body">
                        <p>
                            Welcome to Review !
                            <br />
                            Chào mừng các bạn đến với trang Review của bọn mình.
                            <br />
                            Nơi đây là sân chơi mà các bạn có thể thoải mái đăng tải những bài post review món ăn chân thực và
                            trải nghiệm của mình.
                            <br />
                            Nếu có món ăn gì độc lạ, hãy chia sẻ cho mọi người cũng biết đến nhiều hơn nhé.
                            <br />
                            Lưu ý: bài post không sử dụng những ngôn từ khiếm nhã, thiếu tôn trọng
                            <br />
                            Chúc các bạn có một thời gian vui vẻ nhé !
                            <button class="open-model-btn">Liên hệ với chúng tớ</button>
                        </p>
                        <img src="images/Iconmonan.png" alt="food" width="440px" height="386px"></img>
                    </div>
                </div>
                <span className="divider-bar">
                    <p>Chúng tớ có 5 thành viên xịn xò</p>
                </span>
                <div className="grid__row">
                    <div className="grid__column-2-5">
                        <div className="card">
                            <div className="card__avatar">
                                <img className="avatar" src="images/meo.jpg" alt="avatar" />
                            </div>
                            <h2>Nam Đặng</h2>
                            <p>Sinh viên UIT</p>
                            <div className="card__social">
                                <a href="https://www.facebook.com/nam.dang.22/" target="_blank">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/dhnbroken/" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <button>Contact me!</button>
                        </div>

                    </div>
                    <div className="grid__column-2-5">
                        <div className="card">
                            <div className="card__avatar">
                                <img className="avatar" src="images/bnn.jpg" alt="avatar" />
                            </div>
                            <h2>Dương Bảo Ngọc</h2>
                            <p>Sinh viên UIT</p>
                            <div className="card__social">
                                <a href="https://www.facebook.com/profile.php?id=100004871615862" target="_blank">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/ngoc_duong_45/" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <button>Contact me!</button>

                        </div>
                    </div>
                    <div className="grid__column-2-5">
                        <div className="card">
                            <div className="card__avatar">
                                <img className="avatar" src="images/thien.jpg" alt="avatar" />
                            </div>
                            <h2>Phùng Thế Thiên</h2>
                            <p>Sinh viên UIT</p>
                            <div className="card__social">
                                <a href="https://www.facebook.com/thien.phung.1253" target="_blank">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/_suchamay/" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <button>Contact me!</button>

                        </div>
                    </div>
                    <div className="grid__column-2-5">
                        <div className="card">
                            <div className="card__avatar">
                                <img className="avatar" src="images/minhanh.jpg" alt="avatar" />
                            </div>
                            <h2>Lê Thị Minh Ánh</h2>
                            <p>Sinh viên UIT</p>
                            <div className="card__social">
                                <a href="https://www.facebook.com/profile.php?id=100012161655028" target="_blank">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/dhnbroken/" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <button>Contact me!</button>

                        </div>
                    </div>
                    <div className="grid__column-2-5">
                        <div className="card">
                            <div className="card__avatar">
                                <img className="avatar" src="images/nongminhanh.jpg" alt="avatar" />
                            </div>
                            <h2>Nông Minh Anh</h2>
                            <p>Sinh viên UIT</p>
                            <div className="card__social">
                                <a href="https://www.facebook.com/minh.anh.nong1" target="_blank">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/anhnongminh/" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <button>Contact me!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="model hide">
                <div className="model__inner">
                    <div className="model__header">
                        <p>Information</p>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="model__body">
                        <h2>Chúng tớ nèeee</h2>
                        <p>
                            <a href="https://www.facebook.com/reviewuitie104" target="_blank"><i className="fab fa-facebook"></i>
                                Page của chúng tớ nè</a>
                            <br /><br />
                            <a href="https://m.me/reviewuitie104" target="_blank"><i className="fab fa-instagram"></i> Nhắn tin với
                                chúng tớ nè</a>
                        </p>
                    </div>
                    <div className="model__footer">
                        <button>Close</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}
