import React from 'react'
import { useState, useRef } from 'react'
import Create from './Create'
import UserDetails from './userDetails'
import ErrorBoundary from './ErrorBoundary'

function Form() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');


    const [showUserInfo, setUserInfo] = useState(false)
    const myButtonRef = useRef(null)

    //function to handle change of event
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }

    const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleOccupationChange = (event) => {
        setOccupation(event.target.value);
    }

    //function to handle submit change
    const submitChange = (event) => {
        event.preventDefault();

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
                            value={name}
                            onChange={handleNameChange}
                        />
                    </label>
                    <label>
                        Last name:
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                    </label>
                    <label>
                        Age:
                        <input
                            type="text"
                            name="age"
                            value={age}
                            onChange={handleAgeChange}
                        />
                    </label>
                    <label>
                        City:
                        <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={handleCityChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    <label>
                        Occupation:
                        <input
                            type="text"
                            name="occupation"
                            value={occupation}
                            onChange={handleOccupationChange}
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
                        name={name}
                        lastName={lastName}
                        age={age}
                        city={city}
                        email={email}
                        occupation={occupation}
                    />
                </>
            </div>
        </>
    )
}
export default Form
