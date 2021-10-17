import React, { useEffect } from 'react'
import './resources.css'
import image1 from '../images/11062b_eeb93f94f3c44078be60030ee08dec7e_mv2_d_3732_5598_s_4_2.jpg'
import image2 from '../images/374aee7704a34a2399a1b9918c4d1331.jpg'

const Resources = () => {
    return (
        <div className="resources">
            <div className="title">
                <img src={image1} alt="" />
                <div className="title-content">
                    <h1>Resources</h1>
                </div>
                <img src={image2} alt="" />
            </div>
            <div className="description">
                <h1>Other resources to visit</h1>
                <a href="http://www.healthyretailsf.org/" target="_blank">Healthy Retail SF</a>
                <p>
                    HealthyRetailSF builds upon the best practices of previous efforts and provides interested small business owners with the tools and resources they need, along with focused attention from experts, to develop a business model that allows them to introduce and integrate healthy food options. The program’s ultimate goals are to increase access to healthy food, engage local residents in decision making processes, reduce unhealthy influences, strengthen communities, and stimulate economic development and job creation. 
                </p>
                <a href="http://thefoodtrust.org/" target="_blank">The Food Trust</a>
                <p>
                The Food Trust is a nationally recognized nonprofit dedicated to ensuring that everyone has access to affordable, nutritious food and information to make healthy decisions. Headquartered in Philadelphia, The Food Trust works with neighborhoods, schools, grocers, farmers and policymakers in the city and across the country to develop a comprehensive approach to improved food access that combines nutrition education and greater availability of affordable, healthy food.
                </p>
                <a href="https://sustainableconsumption.usdn.org/initiatives-list/healthy-corner-store-alternatives" target="_blank">USDN Sustainable Consumption Toolkit: Healthy Corner Store Alternatives</a>
                <p>
                Part of a toolkit designed to create a sustainable society. Read this short page about healthy corner store alternatives to learn about why this initiative is beneficial, challenges, solutions, and evaluation of corner store conversion.
                </p>
                <a href="USDA Healthy Corner Stores Guide" target='_blank'>USDA Healthy Corner Stores Guide</a>
                <p>
                In this guide, you will learn how to lay the groundwork for planning and implementing a successful program in your community. It’s important to note that all communities are different, and there is no “one-size-fits-all” corner store program that works for every State, city, or neighborhood. A number of case studies, resources, and best practice recommendations from organizations that have effectively maintained these programs are included for additional learning and support.
                </p>
                <a href="http://thefoodtrust.org/uploads/media_items/phcsn-sell-healthy-guide.original.pdf" target="_blank">Why Sell Healthy Food? </a>
                <p>
                This document written by The Food Trust explains how and why selling healthy foods could mean better business for you, and contribute to a healthier community.
                </p>
                <br></br>
                <h1>Resources used to build this guide</h1>
                <p>
                    Gudzune, K. A., Welsh, C., Lane, E., Chissell, Z., Steeves, E. A., & Gittelsohn, J. (2015).
                    Increasing access to fresh produce by pairing urban farms with corner stores: A case study in a low-income urban setting. Public Health Nutrition, 18(15), 2770-2774. doi:10.1017/s1368980015000051
                </p>
                <p>
                    Healthy Corner Store Alternatives. (n.d.). Retrieved from
                    <a href="https://sustainableconsumption.usdn.org/initiatives-list/healthy-corner-store-alternatives" target="_blank"> https://sustainableconsumption.usdn.org/initiatives-list/healthy-corner-store-alternatives</a>
                </p>
                <p>
                    Healthy Corner Store Alternatives. (n.d.). Retrieved from
                    <a href="https://sustainableconsumption.usdn.org/initiatives-list/healthy-corner-store-alternatives" target="_blank"> https://sustainableconsumption.usdn.org/initiatives-list/healthy-corner-store-alternatives</a>
                </p>
                <p>
                    Healthy Retail SF. (n.d.). Retrieved from <a href="http://www.healthyretailsf.org/" target="_blank">http://www.healthyretailsf.org/</a>
                </p>
                <p>
                    Healthy food in convenience stores. (n.d.). Retrieved from 
                    <a href="https://www.countyhealthrankings.org/take-action-to-improve-health/what-works-for-health/strategies/healthy-food-in-convenience-stores" target="_blank"> https://www.countyhealthrankings.org/take-action-to-improve-health/what-works-for-health/strategies/healthy-food-in-convenience-stores</a>
                </p>
                <p>
                    Home. (n.d.). Retrieved from <a href="http://thefoodtrust.org/" target="_blank">http://thefoodtrust.org/</a>
                </p>
                <p>
                    In Corner Stores. (n.d.). Retrieved from <a href="http://thefoodtrust.org/what-we-do/corner-
                    store#:~:text=The Healthy Corner Store Initiative works to increase the availability,improve healthy options in communities" target="_blank"> http://thefoodtrust.org/what-we-do/corner-
                    store#:~:text=The Healthy Corner Store Initiative works to increase the availability,improve healthy options in communities</a>
                </p>
                <p>
                    Lombardo, C. (2019, December 11). Where to place plant-based foods in grocery stores.
                    Strategy Online. <a href="https://strategyonline.ca/2019/12/11/where-to-place-plant-based-foods-in-grocery-stores-report/" target="_blank"> https://strategyonline.ca/2019/12/11/where-to-place-plant-based-foods-in-grocery-stores-report/</a>
                </p>
                <p>
                    O’Malley, Keelia, et al. “Feasibility of Increasing Access to Healthy Foods in Neighborhood
                    Corner Stores.” Journal of Community Health, vol. 38, no. 4, 2013, pp. 741–749.,
                    doi:10.1007/s10900-013-9673-1.
                </p>
                <p>
                    San Francisco, CA. (n.d.). Retrieved from <a href="https://sunbasket.com/lifestyle/sustainable-san-francisco" target="_blank"> https://sunbasket.com/lifestyle/sustainable-san-francisco</a>
                </p>
                <p>
                    Schneider, B. (2020, December 16). Local Lifeline: An Ode to SF's Corner Stores. Retrieved
                    from <a href="https://www.sfweekly.com/culture/local-lifeline-an-ode-to-sfs-corner-stores/" target="_blank"> https://www.sfweekly.com/culture/local-lifeline-an-ode-to-sfs-corner-stores/</a>
                </p>
                <p>
                    Taker. (2020, August 17). How Can Your Restaurant Benefit from A Plant-Based Diet? Taker.
                    <a href="https://taker.io/blog/plant-based-diet" target="_blank"> https://taker.io/blog/plant-based-diet</a>
                </p>
                <p>
                    USDA Publishes Guide to Help Convenience Stores Sell Healthier Foods: USDA-FNS. (n.d.).
                    Retrieved from <a href="https://www.fns.usda.gov/pressrelease/2016/fns-000916" target="_blank"> https://www.fns.usda.gov/pressrelease/2016/fns-000916</a>
                </p>                    
                <p>
                    Vaziri, A. (2020, March 30). Bay Area corner stores become a lifeline during the coronavirus
                    crisis. Retrieved from <a href="https://www.sfchronicle.com/bayarea/article/Bay-Area-corner-stores-become-a-lifeline-during-15156886.php" target="_blank"> https://www.sfchronicle.com/bayarea/article/Bay-Area-corner-stores-become-a-lifeline-during-15156886.php</a>
                </p>     ​
                <p>
                    Weston, Z. (2020, February 13). 5 Reasons Plant-Based Food Is Good for Business
                    Linkedin. <a href="https://www.linkedin.com/pulse/5-reasons-plant-based-food-good-business-zak-weston" target="_blank"> https://www.linkedin.com/pulse/5-reasons-plant-based-food-good-business-zak-weston</a>
                </p>
            </div>
        </div>

    )
}

export default Resources
