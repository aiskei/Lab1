import React, { useState, useEffect } from 'react'

function Create() {
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch("https://dummyjson.com/posts/1")
            .then((res) => res.json())
            .then((data) => {
                setPost(data)
            })
    }, [])

    return (
        <>
            test
            <h1>{post?.title}</h1>
            <h1>{post?.body}</h1>
        </>
    )
}

export default Create
