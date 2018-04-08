import React from 'react';
import {Link, Route} from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <Link to="/all">Get All Users</Link>
        </div>
    );
}

export default Welcome;