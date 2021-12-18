import React from 'react'
import {Link} from 'react-router-dom'

function WelcomePage() {
    return (
        <div>
            <h2>Welcome Page</h2>
            
            <Link to="/login"><button>Login</button></Link>
            <Link to="/todo"><button>Go To Todo</button></Link>
        </div>
    )
}

export default WelcomePage
