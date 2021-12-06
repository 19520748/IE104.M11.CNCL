import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import "./write.css"

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [rating, setRating] = useState("");
    const [address, setAddress] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            rating,
            address
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data)
            } catch (err) {

            }
            try {
                const res = await axios.post("/posts", newPost)
                window.location.replace("/post/" + res.data._id);
            } catch (err) {

            }

        }

    }
    return (
        <div className="grid">
        <div className="write container">
            <div>
            {file &&
                <img className="writeImg" alt="write"
                    src={URL.createObjectURL(file)} />
            }
            </div>
            <div className="writeFormGroup">
                <label htmlFor="fileInput"><i className="writeIcon fas fa-plus"></i></label>
                <input type="file" id="fileInput" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
            </div>
            <form className="writeForm" onSubmit={handleSubmit}>

                <div style={{ gridColumn: 1, gridRow: 1 }}>
                    <input type="type" placeholder="Tiêu đề" required className="writeInput" autoFocus={true} onChange={e => setTitle(e.target.value)} />
                    <textarea rows="12" placeholder="Nội dung bài viết..." type="text" required className="writeInput writeText"
                        onChange={e => setDesc(e.target.value)}></textarea>
                </div>
                <div style={{ gridColumn: 2, gridRow: 1 }}>
                    <i className="writeStar fas fa-map-marker-alt"></i>
                    <input placeholder="Địa chỉ" type="text" required className="writeInput writeText" onChange={e => setAddress(e.target.value)} />
                    <div style={{textAlign: 'center'}}>
                    <label htmlFor="rating" className="writeLabelRating">Đánh giá</label>
                    <input type="text" className="writeRating writeText" required id="rating" maxlength="3" size="3" onChange={e => setRating(e.target.value)} />
                    <label htmlFor="rating" className="writeLabelRating">/ 5 <i className="writeRatingIcon fas fa-star"></i></label>
                    </div>
                    <div style={{textAlign: 'center', margin: 20}}>
                        <button className="writeSubmit" type="submit">Đăng bài</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}
