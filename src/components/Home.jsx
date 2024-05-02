import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h1> this is home</h1>
            <h2>{user && user.displayName}</h2>
        </div>
    );
};

export default Home;