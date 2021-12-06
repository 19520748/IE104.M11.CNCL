import "./about.css"
import React from 'react'
import Header from '../../components/header/Header'
import { useState } from 'react';
import { Model } from '../../components/model/Model'

export default function About() {
    const [showModel, setShowModel] = useState(false);

    const openModel = () => {
        setShowModel(prev => !prev )
    }

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
                            <button onClick={openModel} class="open-model-btn">Liên hệ với chúng tớ</button>

                        </p>
                        <img src="images/Iconmonan.png" alt="food" width="440px" height="386px"></img>
                    </div>
                </div>
                <span className="divider-bar">
                    <p className="mt-2">Chúng tớ có 5 thành viên xịn xò</p>
                </span>
                <div className="grid__row">
                    <div className="grid__column-2-5">
                        <div className="info__card">
                            <div className="info__card__avatar">
                                <img className="avatar" src="images/meo.jpg" alt="avatar" />
                            </div>
                            <h2>Nam Đặng</h2>
                            <p>Sinh viên UIT</p>
                            <div className="info__card__social">
                                <a href="https://www.facebook.com/nam.dang.22/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/dhnbroken/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <button>Contact me!</button>
                        </div>

                    </div>
                    <div className="grid__column-2-5">
                        <div className="info__card">
                            <div className="info__card__avatar">
                                <img className="avatar" src="images/bnncopy.jpg" alt="avatar" />
                            </div>
                            <h2>Dương Bảo Ngọc</h2>
                            <p>Sinh viên UIT</p>
                            <div className="info__card__social">
                                <a href="https://www.facebook.com/profile.php?id=100004871615862" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/ngoc_duong_45/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <button>Contact me!</button>

                        </div>
                    </div>
                    <div className="grid__column-2-5">
                        <div className="info__card">
                            <div className="info__card__avatar">
                                <img className="avatar" src="images/thien.jpg" alt="avatar" />
                            </div>
                            <h2>Phùng Thế Thiên</h2>
                            <p>Sinh viên UIT</p>
                            <div className="info__card__social">
                                <a href="https://www.facebook.com/thien.phung.1253" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/ptthien_76/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <button>Contact me!</button>

                        </div>
                    </div>
                    <div className="grid__column-2-5">
                        <div className="info__card">
                            <div className="info__card__avatar">
                                <img className="avatar" src="images/minhanh.jpg" alt="avatar" />
                            </div>
                            <h2>Lê Thị Minh Ánh</h2>
                            <p>Sinh viên UIT</p>
                            <div className="info__card__social">
                                <a href="https://www.facebook.com/profile.php?id=100012161655028" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/dhnbroken/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <button>Contact me!</button>

                        </div>
                    </div>
                    <div className="grid__column-2-5">
                        <div className="info__card">
                            <div className="info__card__avatar">
                                <img className="avatar" src="images/nongminhanh.jpg" alt="avatar" />
                            </div>
                            <h2>Nông Minh Anh</h2>
                            <p>Sinh viên UIT</p>
                            <div className="info__card__social">
                                <a href="https://www.facebook.com/minh.anh.nong1" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/anhnongminh/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <button>Contact me!</button>
                        </div>
                    </div>
                </div>
            </div>
            <Model showModel={showModel} setShowModel={setShowModel} />
            
        </>
    )
}