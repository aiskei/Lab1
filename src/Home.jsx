import React, { useState } from 'react'

function Home() {
    const [count, setCount] = useState(0)

    function HandleClick() {
        setCount(count + 1)
    }

    return (
        <>
            <div>My lab1 assignment</div>
            <button onClick={HandleClick}>Count</button>
            <br />
            <div>{count}</div>
        </>
    )
}

export default Home
