import React, { useEffect, useState } from 'react'
import "./posts.css"
import axios from "axios"
import Post from '../post/Post';
import { Link } from 'react-router-dom';
export default function Posts({ posts }) {
    const [cats, setCats] = useState([]);
    const [visible,setVisible]=useState(6);

    const showMorePosts=()=>{
        setVisible((preValue) => preValue+6);
    }
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data);
        }
        getCats();
    }, [])
    return (
        <div className="posts">

            <div id="homeSlide" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#homeSlide" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#homeSlide" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#homeSlide" data-bs-slide-to="2"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/banhmy.jpg" alt="Bánh mỳ" class="carousel-img" />
                            <div class="carousel-caption">
                                <h3>Món ăn Việt</h3>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src="images/sushi.jpeg" alt="Sushi" class="carousel-img" />
                            <div class="carousel-caption">
                                <h3>Món ăn Nhật</h3>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src="images/xoixoai.jpg" alt="Xôi xoài" class="carousel-img" />
                            <div class="carousel-caption">
                                <h3>Món ăn Thái</h3>
                            </div>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#homeSlide" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#homeSlide" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
            <div className="d-flex">
                <ul className="postsItem d-flex">
                    {cats.map(c => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="postsListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="postsList">
                {posts.slice(0,visible).map(p => (
                    <Post post={p} />
                ))}
               
            </div>
            <button className="LoadMoreButton" onClick={showMorePosts}>Xem thêm</button>
        </div>
    )
}
