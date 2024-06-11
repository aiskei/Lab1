import React, { useState, useEffect } from "react";

function Create() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts/1")
      .then((res) => res.json())
      .then((post) => setPost(post, JSON.stringify(post)));
  }, [post]);

  return (
    <>
      <div>
        <div>Title: {post.title}</div>
        <div>Body: {post.body}</div>
        <div>Views: {post.views}</div>
        {/* <div>Likes: {post.reactions.likes}</div>
                <div>Likes: {post.reactions.dislikes}</div> */}
        <div>Tags: {post.tags}</div>
      </div>
    </>
  );
}

export default Create;
