import "./footer.css"

import React from 'react'
import { Link } from "react-router-dom"

export default function Footer() {


    return (
        <>
            <div className="grid">
                <div className="grid__row">
                    <div className="grid__column-2-4">
                        <div className="footer">
                            <div className="footer__icon">
                                <Link to="/" className="logo-img" style={{ textDecoration: 'none' }} href="/"><img src="images/reviewlogo1.png" alt="Logo Review"/>
                                    <h5 style={{margin: "10px"}}>Review</h5>
                                </Link>
                                <p>Ăn khắp nơi <br/> Chơi khắp chốn</p>
                            
                        </div>
                    </div>
                </div>
                <div className="grid__column-2-4">
                    <h3 className="footer__heading">Chịu trách nhiệm nội dung</h3>
                    <dl className="footer__list">
                        <dt className="footer-item">Nhóm 6 - IE104.M11.CNCL</dt>
                        <dt className="footer-item">Công ty TNHH 5 thành viên</dt>
                        <dt className="footer-item">Địa chỉ: Chung cư landmark 81, nhà Minh Ánh</dt>
                    </dl>
                </div>
                <div className="grid__column-2-4">
                    <h3 className="footer__heading">Liên hệ</h3>
                    <dl className="footer-list">
                        <dt className="footer-item">
                            <a href="https://www.facebook.com/reviewuitie104" target="_blank" className="footer-item__link">
                                <i className="fab fa-facebook"></i>
                                Facebook
                            </a>
                        </dt>
                        <dt className="footer-item">
                            <a href="https://www.instagram.com/_suchamay/" target="_blank" className="footer-item__link">
                                <i className="fab fa-instagram"></i>
                                Instagram
                            </a>
                        </dt>
                        <dt className="footer-item">
                            <a href="" className="footer-item__link">
                                <i className="far fa-envelope"></i>
                                Gmail: best@review.com
                            </a>
                        </dt>
                    </dl>
                </div>
                <div className="grid__column-2-4">
                    <h3 className="footer__heading">Chính sách</h3>
                    <dl className="footer-list">
                        <dt className="footer-item">
                            <a className="footer-item__link">
                                <i className="far fa-bell"></i>
                                Chính sách chung
                            </a>
                        </dt>
                        <dt className="footer-item">
                            <a className="footer-item__link">
                                <i className="far fa-user"></i>
                                Chính sách thành viên
                            </a>
                        </dt>
                        <dt className="footer-item">
                            <a href="https://www.facebook.com/reviewuitie104" target="_blank" className="footer-item__link">
                                <i className="fas fa-info-circle"></i>
                                Về chúng tôi
                            </a>
                        </dt>
                    </dl>
                </div>
            </div>
        </div>
                </>
    )
}