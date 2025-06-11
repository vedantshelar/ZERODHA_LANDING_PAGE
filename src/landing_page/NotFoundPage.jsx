import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

function NotFoundPage() {
    return ( 
        <div>
            <h1>Page Not Found</h1>
            <NavLink to={"/"}>
            <button>Go Home</button>
            </NavLink>
        </div>
     );
}

export default NotFoundPage;