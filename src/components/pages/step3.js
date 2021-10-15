import React from 'react'
import './step3.css'
import image1 from '../images/714050847d0a4cf6bf50c682f8d63078.jpg'
import image2 from '../images/11062b_8c36c0f41ddd40ab8bb88f7755ae571f_mv2.jpg'
import { Link } from 'react-router-dom'

const Step3 = () => {
    return (
        <div className="step-3">
            <div className="title">
                <img src={image1} alt="" />
                <div className="title-content">
                    <h1>Step 3</h1>
                    <h2>Identify Potential Partners and Build Relationships</h2>
                </div>
                <img src={image2} alt="" />

            </div>
            <div className="description">
                <div className="potential-partners">
                    <div className="corner-store-owners">
                        <span></span>
                        <div className="content">
                            <h2>Corner Store Owners</h2>
                            <p>If you’re still not completely convinced of making this change in your store, we will help you connect with other store owners who have changed the inventory of their stores to increase and make more apparent their selection of plant-based food options.</p>
                        </div>
                    </div>
                    <div className="local-farmers">
                        <span></span>
                        <div className="content">
                            <h2>Local Farmers</h2>
                            <p>Next, it’s important that you are able to find farmers who can supply healthy food products for your store. We find it highly important that we ensure that you use local farmers, so we increase the sustainability of every single process that the food products have gone through from farm to consumer.</p>
                        </div>
                    </div>
                    <div className="fund-sponsors">
                        <span></span>
                        <div className="content">
                            <h2>Fund Sponsors</h2>
                            <p>Depending on how ambitious your plans for changing your store is, you will most likely need some short-term funding to finance changes in inventory, e.g., new and better fridges/freezers, new displays etc. However, this is by no means a mandatory nor necessary part of increasing the selection of plant-based food options in your store.</p>
                        </div>
                    </div>
                </div>
                <h1>Congrats!</h1>
                <p>First of all, thank you for reading through the guide!</p>
                <p>Now that you have read this guide, we hope you understand the need for this change, its positive impact on the community of the Mission District, and know what to do to BE the change. If you would like more information, check out more resources about this initiative for healthier corner and convenience stores.</p>
                <Link to="/resources">More Info {">"}</Link>
            </div> 
        </div>
    )
}

export default Step3
