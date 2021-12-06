import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import "./singlepost.css"
// import img11 from "/images/image 11.png"
import axios from "axios"
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
export default function SinglePost() {
    const PF = "http://localhost:5000/images/";
    const location = useLocation()
    const path = (location.pathname.split("/")[2]);
    const [post, setPost] = useState({})

    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [rating, setRating] = useState("");
    const [address, setAddress] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
            setRating(res.data.rating)
            setAddress(res.data.address)
        };
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete("/posts/" + path, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put("/posts/" + path, {
                username: user.username, title: title, desc: desc, address: address, rating: rating
            });
            window.location.reload();
            setUpdateMode(false);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && <img className="singlePostImg" alt="singlePost" src={PF + post.photo} />}
                {updateMode ? <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="singlePostTitleInput" autoFocus />
                    : (
                        <h1 className="singlePostTitle">
                            {title}
                            {post.username === user?.username &&
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon fas fa-edit" onClick={() => setUpdateMode(true)}></i>
                                    <i className="singlePostIcon fas fa-trash-alt" onClick={handleDelete}></i>
                                </div>
                            }
                            <hr />
                        </h1>
                    )
                }
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Tác giả :&nbsp;
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (<>
                    <div className="rate">
                        <span>Đánh giá:</span>
                        <input type="text" className="singlePostRateInput" maxlength="3" size="3" id="rating" cols="2" rows="1" value={rating}
                            onChange={(e) => setRating(e.target.value)} />
                        <span style={{ fontSize: 20 }}>/5<i style={{ color: 'yellow' }} className="fas fa-star"></i></span>
                    </div>
                </>
                ) :
                    (<span className="singlePostRate">Đánh giá : {post.rating}/5<i className="fas fa-star"></i></span>)
                }
                {updateMode ? (<input className="singlePostAddressInput" value={address}
                    onChange={(e) => setAddress(e.target.value)} />) : (<span className="singlePostAddress">Địa chỉ : {address}</span>)}
                <br />
                {updateMode ? (<input className="singlePostDescInput" rows="8" value={desc} onChange={(e) => setDesc(e.target.value)} />) : (
                    <p className="singlePostDesc">

                        {desc}


                    </p>
                )}
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>Update</button>

                )}


            </div>
        </div>
    )
}
