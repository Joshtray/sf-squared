import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './home.css'
import image from '../images/0bd9144b693e4ef7bcd1cc7ec3d78fbe.png'

const Home = () => {
    const history = useHistory();
    return (
        <div className="home">
            <div className="slideshow">
                <div className="title">
                    <div className="title-content">
                        <p>Mission: Healthy Corner Store</p>
                        <span>
                            <p>Be the change in the Mission District</p>
                            <span><img src={image} /></span>
                            <Link to="/how">LEARN HOW {">"}</Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className="description">
                <section>
                    <h1>What is a corner store?</h1>
                    <p>Corner stores (convenience stores) are individual retail stores owned by individuals that stock a range of items such as food, snacks, beverages, everyday household objects, and more.</p>
                </section>
                <section>
                    <h1>Do you own a corner store in the mission?</h1>
                    <p>If your answer is YES, you're in the right place!</p>
                    <p>First thing first, welcome!</p>
                    <p>On this website, we will show you how you can make a positive change in the Mission District. Many corner stores in the Mission District and in the greater neighborhoods that make up San Francisco predominantly sell unhealthy foods. This lack of healthy options contributes to the problem of food insecurity especially for low-income residents. Corner stores have the tendency to be located in areas of low-income communities, and it only creates a negative feedback where residents have no access (cost and convenience wise) to healthy options, thus they continue to buy highly processed foods.</p> 
                    <p>We believe that the key to change in this 'food desert' lies in YOUR hands. Converting corner stores to sell healthier foods comes with many benefits, both towards business and the community! Click through our website to learn why and how you can improve the quality of the lives of the customers you serve by making this change. </p>
                </section>
                <section>
                    <h1>What can you do to help?</h1>
                    <p>Convert your store to a HEALTHY corner store!</p>
                    <p>In this website, we provide you with a step-by-step guide to how you can make this shift in your store. There is only 3 steps to do this (see 'How' section of our website). We've crafted this website for you to read through a page, then click the button at the bottom to go to the next section of your journey.</p>
                    <p>Click the button below - the one that says "Learn Why" to proceed to the next section where we tell you about what a healthy corner store looks like and present you with benefits it provides for your business as well as your community!</p>
                </section>
                <a href="#" onClick={()=>(history.push('/why'))}>Learn Why {">"}</a>
            </div>
        </div>
    )
}

export default Home
