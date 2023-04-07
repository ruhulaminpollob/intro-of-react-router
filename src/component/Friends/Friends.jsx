import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const loadData=useLoaderData()
    console.log(loadData);
    return (
        <div>
            <h1>Friends Page</h1>
        </div>
    );
};

export default Friends;