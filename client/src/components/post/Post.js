
import React from 'react'
import "./post.css"
import { Link } from "react-router-dom"
export default function Post({ post }) {
    const PF = "http://localhost:5000/images/";
    return (
                <div className="post">
                    <div className="postInfo">
                        <div className="postInfo__img">
                        {post.photo && (<img className="postImg" src={PF + post.photo} alt="postImg" />)}
            </div>

                        <div className="postCats">
                            {post.categories.forEach((c) => {
                                <span className="postCat">{c.name}</span>
                            })}

                            {/* <span className="postCat">LIFE</span> */}

                        </div>
                        <Link to={`/post/${post._id}`} className="link">
                            <span className="postTitle">
                                {post.title}
                            </span>
                        </Link>



                        <hr/>
                        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                    </div>
                    <p className="postDesc">
                        {post.desc}
                    </p>
                </div>
    )
}
