import React from 'react'
import './step2.css'
import image1 from '../images/23927c_8d79fda4369f4b5e9b912f9a5a17364d_mv2.jpg'
import image2 from '../images/11062b_ff78c39b0deb4814b7ca49b79deaa5ad_mv2.jpg'
import { Link } from 'react-router-dom'

const Step2 = () => {
    return (
        <div className="step-2">
            <div className="title">
                <img src={image1} alt="" />
                <div className="title-content">
                    <h1>Step 2</h1>
                    <h2>Identify and Overcome Barriers</h2>
                </div>
                <img src={image2} alt="" />

            </div>
            <div className="description">
                <h1>What are some obstacles to overcome?</h1>
                <div className="obstacles">
                    <a href="#you" style={{backgroundColor: '#f1bfb5' }}>
                        <h3>You</h3>
                        <p>The first and the largest obstacle you'll face!</p>
                    </a>
                    <a href="#access" style={{backgroundColor: '#BADEC2' }}>
                        <h3>Access</h3>
                        <p>Where do you get healthy food from?</p>
                    </a>
                    <a href="#placement" style={{backgroundColor: '#F4B8BD' }}>
                        <h3>Placement</h3>
                        <p>Make healthy options easy to find for the customers.</p>
                    </a>
                    <a href="#promoting" style={{backgroundColor: '#75CBA8' }}>
                        <h3>Promoting</h3>
                        <p>Encourage people to buy healthy foods!</p>
                    </a>
                </div>
                <hr id="you"></hr>
                <h1>- You -</h1>
                <section style={{backgroundColor: '#f1bfb5' }}>
                    <p>
                        The major barrier standing in the way of implementing plant-based food items in your store is {<span style={{ color: 'red'}}>you</span>}, thus you have the biggest influence to enact a powerful change! The more you believe in the change and its potential, the more effective and empowering it will be. Many corner store owners are not incentivized to implement such changes to their stores. If you still have doubts about the effectiveness of introducing plant-based options in your sale, check out the why section of this website! We provide justified reasons for why you would want to consider plant-based foods in your business. After reading through this section, you should understand the benefits - not just for you, but also for your community - of making these changes. With this new mindset, you can begin studying how to incorporate these changes.
                    </p>
                </section>
                <hr id="access"></hr>
                <h1>- Access to healthy options -</h1>
                <section style={{backgroundColor: '#BADEC2' }}>
                    <p>
                        Another problem many corner store owners face is their access to these healthier plant-based food options. Your distributor might not sell these healthier products, and many corner store owners end up spending more money by obtaining plant-based resources from larger grocery stores. They might then end up selling these foods at higher prices to customers, which is not desirable. To tackle this problem, you can explore different distribution channels like wholesale stores, produce markets, or even directly from farms. You can also contact other healthy corner store owners to discover their sources of these food items at cheaper prices.
                    </p>
                </section>
                <hr id="placement"></hr>
                <h1>- Product placement -</h1>
                <section style={{backgroundColor: '#F4B8BD' }}>
                    <p>
                        Another problem that corner store owners often have is how to position these plant-based foods in a way that would appeal to most of your customers the best. A key factor in the continued growth of the category is ensuring consumers can find plant-based products when they do their shopping. A study found that some shoppers would prefer to see plant-based foods merchandised next to mainstream dairy-based products. However, vegans and vegetarians also want these items to be placed in the produce section over other locations, like the natural and organic section or mainstream product aisles. The optimum would be to combine both methods; have a section with plant-based foods to make it easy for vegans, etc to locate, but also neighbor other food options with plant-based alternatives to allow customers to juxtapose and make a choice.
                    </p>
                </section>
                <hr id="promoting"></hr>
                <h1>- Promoting healthy options -</h1>
                <section style={{backgroundColor: '#75CBA8' }}>
                    <p>
                        Once you have made changes to your organization, another barrier arises in influencing customers to buy these plant-based food options consistently. No matter the subtle nudges you make to influence them, many customers will still need clear messages to encourage them to increase their plant-based food consumption. It might not be easy to influence these people. However, you can use methods like posters and flyers, to communicate the importance of shopping and eating healthy to customers, as well as the benefits of sustainable food for the environment, thus encouraging them to buy more plant-based products.
                    </p>
                </section>
                <Link to="/step-3" className="to-step-3">Next: Step 3! {">"}</Link>
            </div>
        </div>
    )
}

export default Step2
