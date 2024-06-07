import React from 'react'
import { useState } from 'react'

function Form() {
    //state variable for input fields: name, lastname, age, city, email, and occupation
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [occupation, setOccupation] = useState('')

    //function for handling name change
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    //function for handling lastname change
    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    //function for handling age change
    const handleAgeChange = (event) => {
        setAge(event.target.value)
    }

    //function for handling city change
    const handleCityChange = (event) => {
        setCity(event.target.value)
    }

    //function for handling email
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    //function for handling occupation change
    const handleOcuppationChange = (event) => {
        setOccupation(event.target.value)
    }

    //function for handling submit
    const submitChange = (event) => {
        event.preventDefault()
        console.log(name, lastName, age, city, email, occupation)
    }

    return (
        <>
            <div>
                <form>
                    <label>
                        Name
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </label>
                    <label>
                        Last name
                        <input
                            type="text"
                            value={lastName}
                            onChange={handleLastNameChange}
                        />
                    </label>
                    <label>
                        Age
                        <input
                            type="text"
                            value={age}
                            onChange={handleAgeChange}
                        />
                    </label>
                    <label>
                        City
                        <input
                            type="text"
                            value={city}
                            onChange={handleCityChange}
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    <label>
                        Occupation
                        <input
                            type="text"
                            value={occupation}
                            onChange={handleOcuppationChange}
                        />
                    </label>
                </form>
                <br />
                <button type="submit" onClick={submitChange}>
                    Submit
                </button>
            </div>
        </>
    )
}

export default Form
