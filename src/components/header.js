import React, { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import './header.css'

const Header = () => {
    const location = useLocation()
    const history = useHistory()
    const [currentLoc, setCurrentLoc] = useState("/home")
    useEffect(() => {
        setCurrentLoc(location.pathname)
    }, [location])
    return (
        <div className="header">
            <a href="#" onClick={()=>(history.push('/'))} className={currentLoc === "/" ? "current" : ''}>Home</a>
            <a href="#" onClick={()=>(history.push('/why'))} className={currentLoc === "/why" ? "current" : ''}>Why?</a>
            <a href="#" onClick={()=>(history.push('/how'))} className={currentLoc === "/how" ? "current": ""}>How?</a>
            <a href="#" onClick={()=>(history.push('/resources'))} className={currentLoc === "/resources" ? "current": ''}>Resources</a>
            <a href="#" onClick={()=>(history.push('/about-us'))} className={currentLoc === "/about-us" ? "current": ''}>About Us</a>
        </div>
    )
}

export default Header
