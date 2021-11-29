import React, { useEffect, useState } from 'react'
import "./posts.css"
import axios from "axios"
import Post from '../post/Post';
import { Link } from 'react-router-dom';
export default function Posts({ posts }) {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data);
        }
        getCats();
    }, [])
    return (
        <div className="posts">

            <div className="postsDesc">
                <p>Đề xuất của bạn</p>
                <div className="postsImg">
                    <img src="images/Rectangle32.png" alt="Món Việt" />
                    <img src="images/Rectangle33.png" alt="Món Nhật" />
                    <img src="images/Rectangle34.png" alt="Món Thái" />

                    {/* <p className="postsImg1">Món Việt</p>
                    <p className="postsImg2">Món Nhật</p>
                    <p className="postsImg3">Món Thái</p> */}
                </div>

            </div>
            <div className="postsList">
                <ul className="postsItem">
                    {cats.map(c => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="postsListItem">{c.name}</li>
                        </Link>
                    ))}
                   
                    {/* <li className="postsListItem">Ăn vặt</li>
                    <li className="postsListItem">Coffee</li> */}
                </ul>
            </div>
            {posts.map(p => (
                <Post post={p} />
            ))}
            {/* <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/> */}
        </div>
    )
}
