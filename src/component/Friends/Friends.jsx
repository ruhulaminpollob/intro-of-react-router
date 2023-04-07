import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends=useLoaderData()
    // console.log(loadData);
    return (
        <div>
            <h1>My total friend {friends.length}</h1>
            {
                friends.map(friend=> <Friend key={friend.id} friend={friend} /> )
            }
        </div>
    );
};

export default Friends;