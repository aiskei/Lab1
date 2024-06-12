import React from 'react'
import { useState, useRef } from 'react'
import Create from './Create'
import UserDetails from './userDetails'
import ErrorBoundary from './ErrorBoundary'

function Form() {
    const [showUserInfo, setUserInfo] = useState(false)
    const myButtonRef = useRef(null)

    //state variable for input fields: name, lastname, age, city, email, and occupation
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        age: '',
        city: '',
        email: '',
        occupation: ''
    })

    //function to handle submit change
    //create a variable to assign the previous state
    const submitChange = (event) => {
        const { name, value } = event.target
        setUser((prevState) => ({ ...prevState, [name]: value }))
        setUserInfo(true)
        myButtonRef.current.style.background = 'blue'
    }

    return (
        <>
            <div>
                <ErrorBoundary>
                    <Create />
                </ErrorBoundary>
                <br />
                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={submitChange}
                        />
                    </label>
                    <label>
                        Last name:
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={submitChange}
                        />
                    </label>
                    <label>
                        Age:
                        <input
                            type="text"
                            name="age"
                            value={user.age}
                            onChange={submitChange}
                        />
                    </label>
                    <label>
                        City:
                        <input
                            type="text"
                            name="city"
                            value={user.city}
                            onChange={submitChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={submitChange}
                        />
                    </label>
                    <label>
                        Occupation:
                        <input
                            type="text"
                            name="occupation"
                            value={user.occupation}
                            onChange={submitChange}
                        />
                    </label>
                </form>
                <br />
                <button ref={myButtonRef} type="submit" onClick={submitChange}>
                    Submit
                </button>

                <br />
                <>
                    <UserDetails
                        showUserInfo={showUserInfo}
                        name={user.name}
                        lastName={user.lastName}
                        age={user.age}
                        city={user.city}
                        email={user.email}
                        occupation={user.occupation}
                    />
                </>
            </div>
        </>
    )
}
export default Form
