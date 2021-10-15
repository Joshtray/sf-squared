import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './header.css'

const Header = () => {
    const location = useLocation()
    const [currentLoc, setCurrentLoc] = useState("/home")
    useEffect(() => {
        setCurrentLoc(location.pathname)
    }, [location])
    return (
        <div className="header">
            <Link to="/" className={currentLoc === "/" ? "current" : ''}>Home</Link>
            <Link to="/why" className={currentLoc === "/why" ? "current" : ''}>Why?</Link>
            <Link to="/how" className={currentLoc === "/how" ? "current": ""}>How?</Link>
            <Link to="/resources" className={currentLoc === "/resources" ? "current": ''}>Resources</Link>
            <Link to="/about-us" className={currentLoc === "/about-us" ? "current": ''}>About Us</Link>
        </div>
    )
}

export default Header
