import React, {useState} from "react"

function Home() {
    const [count, setCount] = useState(0)

    function HandleClick() {
       setCount(count +1)
    }

    return (
        <>  <button onClick={HandleClick}>Count</button>
            <br />
            <div>{count}</div>
        </>
    )
}

export default Home
