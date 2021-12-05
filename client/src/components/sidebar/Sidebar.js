import React from 'react'
import "./sidebar.css"


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    <h1>Reviewer nổi bật <i className="fas fa-map-pin"></i></h1>
                    
                </span>
                <div className="card">

                    <div className="card-body">

                        <img src="images/neulaanh.jpg" alt="avatar" />
                        <div className="card-text">
                            <h4>neulaanh</h4>
                            <p><i className="fas fa-map-marker-alt"> </i>Bình Dương<br />Độ hot: 4.5/5<i className="fas fa-star"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">

                    <div className="card-body">

                        <img src="images/minhanhdaigia.jpg" alt="avatar" />
                        <div className="card-text">
                            <h4>minhanhdaigia</h4>
                            <p><i className="fas fa-map-marker-alt"> </i>Tầng 81, Landmark 81<br />Độ hot: 4.5/5<i className="fas fa-star"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">

                    <div className="card-body">

                        <img src="images/bnn.jpg" alt="avatar" />
                        <div className="card-text">
                            <h4>bnn</h4>
                            <p><i className="fas fa-map-marker-alt"> </i>Quận 11<br />Độ hot: 4.5/5<i className="fas fa-star"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">

                    <div className="card-body">

                        <img src="images/dhnbroken.jpg" alt="avatar" />
                        <div className="card-text">
                            <h4>dhnbroken</h4>
                            <p><i className="fas fa-map-marker-alt"> </i>Bốn bề là nhà<br />Độ hot: 4.3/5<i className="fas fa-star"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">

                    <div className="card-body">

                        <img src="images/image14.png" alt="" />
                        <div className="card-text">
                            <h4>Lẩu cù lao</h4>
                            <p><i className="fas fa-map-marker-alt"> </i>410 Nguyễn Xí,<br />4.3/5<i className="fas fa-star"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">

                    <div className="card-body">

                        <img src="images/image14.png" alt="" />
                        <div className="card-text">
                            <h4>Lẩu cù lao</h4>
                            <p><i className="fas fa-map-marker-alt"> </i>410 Nguyễn Xí,<br />4.3/5<i className="fas fa-star"></i>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
