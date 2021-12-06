import React from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom';


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    <h1>Reviewer nổi bật  <i className="fas fa-map-pin"></i></h1>
                    
                </span>
                <div className="card">

                    <div className="card-body">

                        <img src="images/defaultAva.png" alt="avatar" />
                        <div className="card-text">
                        <Link to="/?user=Minhanhne" style={{ textDecoration: 'none' }} className="hot-reviewer">
                            <h4 style={{ textDecoration: 'none' }}>Minhanhne</h4>
                        </Link>
                            <p><i className="fas fa-map-marker-alt"> </i>Thôn cành lá<br />Độ hot: 5/5<i className="fas fa-star"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">

                    <div className="card-body">

                        <img src="images/neulaanh.jpg" alt="avatar" />
                        <div className="card-text">
                        <Link to="/?user=neulaanh" style={{ textDecoration: 'none' }} className="hot-reviewer">
                            <h4 style={{ textDecoration: 'none' }}>neulaanh</h4>
                        </Link>
                            
                            <p><i className="fas fa-map-marker-alt"> </i>Bình Dương<br />Độ hot: 4.5/5<i className="fas fa-star"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">

                    <div className="card-body">

                        <img src="images/minhanhdaigia.jpg" alt="avatar" />
                        <div className="card-text">
                        <Link to="/?user=minhanhdaigia" style={{ textDecoration: 'none' }} className="hot-reviewer">
                            <h4 style={{ textDecoration: 'none' }}>minhanhdaigia</h4>
                        </Link>
                            <p><i className="fas fa-map-marker-alt"> </i>Tầng 81, Landmark 81<br />Độ hot: 4.5/5<i className="fas fa-star"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">

                    <div className="card-body">

                        <img src="images/bnn.jpg" alt="avatar" />
                        <div className="card-text">
                        <Link to="/?user=bnn" style={{ textDecoration: 'none' }} className="hot-reviewer">
                            <h4 style={{ textDecoration: 'none' }}>bnn</h4>
                        </Link>
                            <p><i className="fas fa-map-marker-alt"> </i>Quận 11<br />Độ hot: 4.5/5<i className="fas fa-star"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">

                    <div className="card-body">

                        <img src="images/dhnbroken.jpg" alt="avatar" />
                        <div className="card-text">
                        <Link to="/?user=dhnbroken" style={{ textDecoration: 'none' }} className="hot-reviewer">
                            <h4 style={{ textDecoration: 'none' }}>dhnbroken</h4>
                        </Link>
                            <p><i className="fas fa-map-marker-alt"> </i>Bốn bề là nhà<br />Độ hot: 4.3/5<i className="fas fa-star"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
