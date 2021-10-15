import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/11062b_c0a0690b029f4e8cbfcdcf7f011916a0_mv2.jpg'
import image2 from '../images/6b4d2964671f4cb18482902646ba3895.jpg'
import './step1.css'

const Step1 = () => {
    return (
        <div className="step-1">
            <div className="title">
                <img src={image1} alt="" />
                <div className="title-content">
                    <h1>Step 1</h1>
                    <h2>Understanding your corner store environment</h2>
                </div>
                <img src={image2} alt="" />

            </div>
            <div className="description">
                <h1>How does your store fit into the community?</h1>
                <p>
                    To get started on your journey to a healthy corner store, you need to assess and understand the environment that your corner store is in before you implement any changes. Understanding your environment allows you to know exactly what the community needs and what it doesn’t need. It also prevents you from implementing something that may cause the business to decrease. Knowing your marketplace helps you gain a better sense of what kind of actions to take. See steps below to gain a better understanding of your corner store environment!
                </p>
                <div className="steps">
                    <h1>1. Assess your community</h1>
                    <p>First, we encourage you to assess your community. Who are your customers? What are their needs? In the case of the Mission District, 40% of the population is Hispanic. What might that mean for the products you supply? We suggest you tailor your products to meet their demands, which could be shaped by their culture, ethnicity, age, and so on.</p>
                    <hr></hr>
                    <h1>2. Identify gaps and inefficiencies</h1> 
                    <p>Secondly, research where the food that your target audience is buying comes from, the processes of food reaching the consumers, and even how, and how much food goes to waste. Knowing the farm-to-table(-to-waste) allows you to identify any gaps and inefficiencies in the process that you can eliminate, as well as the gap between the consumer's needs and the products you offer. The more direct the food source, the cheaper and fresher the food! </p>
                    <hr></hr>
                    <h1>3. Assess neighboring stores</h1>
                    <p>
                    Third, visit other corner stores and grocery stores to determine what healthy foods they do offer and don’t offer. Take note of the prices they sell these items as a guideline/base rate for your store. In addition, record the freshness of the products they are selling. 
                    </p>
                    <hr></hr>
                    <h1>4. Gather inputs from your customers</h1>
                    <p>
                    Fourth, get direct inputs from your customers! Create a survey or an opinion box where customers can contribute their opinions to help you make your healthy corner store better, for you and your customers. After all, your corner store should meet the demands of the consumers. Instead of figuring that out yourself, just ask the customers!
                    </p>
                </div>
                <Link to="/step-2">Next: Step 2! {">"}</Link>
            </div>
        </div>
    )
}

export default Step1
