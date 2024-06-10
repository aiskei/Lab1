const UserDetails = (props) => {
    return (
        <>
            <p>Name: {props.name}</p>
            <p>Last name: {props.lastName}</p>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
            <p>Email: {props.email}</p>
            <p>Occupaton: {props.occupation}</p>
        </>
    )
}

export default UserDetails
