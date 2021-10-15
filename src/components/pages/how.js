import React from 'react'
import './how.css'
import image1 from '../images/11062b_a1077866ede74991932f047732cf1912_mv2.jpg'
import image2 from '../images/11062b_4fb0544b6f4a4920a9ca3a69f6448820_mv2.jpg'
import { Link } from 'react-router-dom'

const How = () => {
    return (
        <div className="how">
            <div className="title">
                <img src={image1} alt="" />
                <div className="title-content">
                    <h1>How?</h1>
                    <h2>STEP-BY-STEP GUIDE</h2>
                    <p>You must be wondering: "how do you make a healthy corner store?" No need to worry, we've got you covered. Click through the steps below to see how you can achieve a successful healthy corner store and fight food deserts!</p>
                </div>
                <img src={image2} alt="" />
            </div>
            <div className="description">
                <h1>Why does this work?</h1>
                <p>
                    These steps are designed to help you (the owner of a corner store!) to dig deep into your corner store, the inventory, the environment, the community, and the customers, allowing you to identify the gaps in your current operation so that you can implement new strategies that will bring results as quick and as efficiently as possible. You will have to be objective and critique your own store for this to work, and we suggest you can ask others (outside the store) to gather unbiased information.
                </p>
                <Link to="/step-1">Step 1: Environment {">"}</Link>
                <Link to="/step-2">Step 2: Obstacles {">"}</Link>
                <Link to="/step-3">Step 3: Partnership {">"}</Link>
            </div>
        </div>
    )
}

export default How
