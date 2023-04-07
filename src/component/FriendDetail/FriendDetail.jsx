import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const details=useLoaderData();
    console.log(details);
    return (
        <div>
            <h1>Friend Detail is here </h1>
            <h2>{details.name}</h2>
            <p>{details.website}</p>
        </div>
    );
};

export default FriendDetail;