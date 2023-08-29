import { async } from "@firebase/util";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

function CreatePost() {

    const [title, setTitle] = useState("");
    const [post, setPost ] = useState("");

    const postCollectionRef = collection(db, "posts");
    const navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postCollectionRef, {title, post, author: {name: auth.currentUser.displayName, id:auth.currentUser.uid}})
        navigate("/")
    }

    return(
        <div className="createPostPage">
            <div className="cpContainer">
            <h1> Create A Blog</h1>
            <div className="inputGp">
                <label> Title:</label>
                <input placeholder="Title..."
                onChange={(e) => {
                    setTitle(e.target.value)
                }}/>
            </div>
            <div className="inputGp">
                <label>Post :</label>
                <textarea placeholder="Blog..."
                onChange={(e) => {
                    setPost(e.target.value)
                }}/>
            </div>
            <button className="button" onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost;