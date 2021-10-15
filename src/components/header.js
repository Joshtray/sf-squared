import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/why">Why?</Link>
            <Link to="/how">How?</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/about-us">About Us</Link>
        </div>
    )
}

export default Header
