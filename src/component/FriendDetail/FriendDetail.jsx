import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetail = () => {
    const details=useLoaderData();
    console.log(details);
    const navigate=useNavigate()
    const navigateHandler=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h1>Friend Detail is here </h1>
            <h2>{details.name}</h2>
            <p>{details.website}</p>
            <button onClick={navigateHandler}>go back</button>
        </div>
    );
};

export default FriendDetail;