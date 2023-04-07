import React from 'react';
import { Link } from 'react-router-dom';
import "./Friend.css"

const Friend = ({friend}) => {
    return (
        <div className='friend'>
            <h3>{friend.name}</h3>
            <p>email: {friend.email}</p>
            <p>Phone Number: {friend.phone}</p>
            <p> <Link to={`/friend/${friend.id}`}>See Details</Link> </p>
        </div>
    );
};

export default Friend;