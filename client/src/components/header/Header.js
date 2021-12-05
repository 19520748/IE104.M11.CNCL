import React from 'react'
import "./header.css"

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})

export default function Header() {
    return (

        <div className='grid'>
        <div className="header">
            <div className="headerTitles">

                <span className="headerTitle">Blog ẩm thực Việt</span>
            </div>
            <img className="headerImg" src="images/headerImg.png" />
        </div>
        <a href="#" className="to-top">
                        <i class="fas fa-chevron-up"></i>
                    </a>
        </div>
    )
}
