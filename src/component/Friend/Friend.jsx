import React from 'react';
import "./Friend.css"

const Friend = ({friend}) => {
    return (
        <div className='friend'>
            <h3>{friend.name}</h3>
            <p>email: {friend.email}</p>
            <p>Phone Number: {friend.phone}</p>
        </div>
    );
};

export default Friend;