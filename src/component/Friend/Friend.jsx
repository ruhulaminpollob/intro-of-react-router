import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Friend.css"

const Friend = ({friend}) => {
    const navigate=useNavigate()
    const showDetails=()=>{
        navigate(`/friend/${friend.id}`)
    }
    return (
        <div className='friend'>
            <h3>{friend.name}</h3>
            <p>email: {friend.email}</p>
            <p>Phone Number: {friend.phone}</p>
            <p> <Link to={`/friend/${friend.id}`}>See Details</Link> </p>

            <button onClick={showDetails}>Details</button>
        </div>
    );
};

export default Friend;