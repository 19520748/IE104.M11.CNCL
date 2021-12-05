import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.css"
import axios from "axios"
import { useLocation } from 'react-router'


export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search)
            setPosts(res.data)
        }
        fetchPosts()
    }, [search])
    return (
        <>

            <Header />
        <div className="grid">
            <div className="home container">
                <div className="left-container">
                    <Posts posts={posts} />
                </div>
                <div className="right-container">
                    <Sidebar />
                </div>
            </div>
        </div>
        </>
    )
}
