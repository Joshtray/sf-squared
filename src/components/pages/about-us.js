import React from 'react'
import './about-us.css'
import image1 from '../images/11062b_ef3e52d6c0754a58919427f777eb1d26_mv2.jpg'
import image2 from '../images/9990b5d12bb64d7e81a5a8937277cc2e.jpg'
import marcus from '../images/marcus.jpg'
import jessey from '../images/jessey.jpeg'
import satone from '../images/satone.jpg'
import { useHistory } from 'react-router'

const AboutUs = () => {
    const history = useHistory();
    return (
        <div className="about-us">
            <div className="title">
                <img src={image1} alt="" />
                <div className="title-content">
                    <h1>About Us</h1>
                </div>
                <img src={image2} alt="" />
            </div>
            <div className="description">
                <h1>The Team</h1>
                <section>
                    <div><img src={marcus}></img></div>
                    <div>
                        <h2>Marcus Mørup</h2>
                        <p>
                        Hi! My name is Marcus, and I'm currently studying remotely from my homeland, Denmark. My main interests include economics, social science, and environmental sustainability. I'm very excited about the equality-aspect of this big question, and look very much forward to making my contributions to this exciting project!
                        </p>
                    </div>
                </section>
                <section>
                    <div><img src={jessey}></img></div>
                    <div>
                        <h2>Jessey Uche-Nwichi</h2>
                        <p>
                            Hi! My name is Jessey Uche-Nwichi. I'm from Nigeria and I am currently studying at Minerva remotely from Nigeria. I really like drawing and playing basketball and I am interested in programming and problem solving. I'm looking forward to working with my teammates on this project.
                        </p>
                    </div>
                </section>
                <section>
                    <div><img src={satone}></img></div>
                    <div>
                        <h2>Satone Haratani</h2>
                        <p>
                            Hello! My name is Satone Haratani and I grew up in Japan and Washington state, and currently in San Francisco. Some of my interests include environmentalism and community building. I love photography, sailing, biking, and eating good food! I'm looking forward to putting all my favorite things into this project!
                        </p>
                    </div>
                </section>
                <div className="nav-buttons">
                    <a href="#" onClick={()=>(history.push('/why'))}>Why?</a>
                    <a href="#" onClick={()=>(history.push('/how'))}>How?</a>
                    <a href="#" onClick={()=>(history.push('/resources'))}>Resources</a>
                </div>
            </div>
        </div>
    )
}

export default AboutUs