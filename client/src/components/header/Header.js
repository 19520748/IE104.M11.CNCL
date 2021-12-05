import React from 'react'
import "./header.css"

export default function Header() {
    return (

        <div className='header__grid'>
        <div className="header">
            <div className="headerTitles">

                <span className="headerTitle">Blog ẩm thực Việt</span>
            </div>
            <img className="headerImg" src="images/headerImg.png" />
        </div>
        </div>
    )
}
