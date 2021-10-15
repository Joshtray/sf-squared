import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="slideshow">
                <div className="title">
                    <div className="title-content">
                        <p>Mission: Healthy Corner Store</p>
                        <span>
                            <p>Be the change in the Mission District</p>
                            <span></span>
                            <Link to="/how">LEARN HOW {">"}</Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="description">

            </div>
        </div>
    )
}

export default Home
