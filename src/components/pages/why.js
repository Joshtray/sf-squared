import React from 'react'
import { Link } from 'react-router-dom'
import './why.css'
import image1 from '../images/03e90c0fba8e4fd4ab9fe85e2ec8f980.jpg';
import image2 from '../images/11062b_84afa0122be54830b768a807899f2ecf_mv2.jpg'

const Why = () => {
    return (
        <div className="why">
            <div className="title">
                <img src={image1} alt="" />
                <div className="title-content">
                    <h1>Why?</h1>
                    <h2>GREATER HEALTH AND BUSINESS PROFITS</h2>
                    <p>Corner stores are important, especially in low-income communities where its accessibility and convenience continues to supply and feed families. Here, we discuss why it is so important for corner stores to be healthy and the myriad of benefits it can provide you and your community.</p>
                </div>
                <img src={image2} alt="" />
            </div>
            <div className="description">
                <h1>What does a successful healthy corner store look like?</h1>
                <p>Corner stores are prominent in low-income neighborhoods, and often serve as the primary place for low income residents to shop for groceries.   Thus, corner stores in low-income communities play a large role within the health of the community. Research also shows that corner stores in these communities have far fewer options for healthy and fresh foods. In these so-called ‘food deserts,’ corner stores have the power and the potential to impact the community for the better, by providing, promoting, and engaging with the community with the opportunity and incentive to consume healthy foods.</p>
                <div className="comparison">
                    <div className="normal">
                        <h1>Normal corner stores</h1>
                        <section>
                            <p>Limited available healthy food options</p>
    ​                        <ul>
                                <li>None or limited fresh fruits and vegetables</li>
                                <li>High carbs and fat snack options</li>
                                <li>Processed foods</li>
                            </ul>
                        </section>
                        <section>
                            <p>
                                Fresh produce is unappealing or hard to see, discouraging consumers to purchase it.
                            </p>
                        </section>
                        <section>
                            <p>
                                Store owners are unfamiliar with the proper pricing of fresh produce and healthy foods. 
                            </p>
                        </section>
                        <section>
                            <p>
                                Marketing, both outside and inside stores are promoting unhealthy foods such as sweetened drinks, chips, candy, etc. 
                            </p>
                        </section>
                        <section>
                            <p>
                                Marketing, both outside and inside stores are promoting unhealthy foods such as sweetened drinks, chips, candy, etc. 
                            </p>
                        </section>
                    </div>
                    <div className="healthy">
                        <h1>Healthy corner stores</h1>
                        <section>
                            <p>Increased availability of healthy food options!</p>
                            <ul>
                                <li>Fresh/frozen fruits and vegetables</li>
                                <li>Healthy snacks</li>
                                <li>Canned fruits and vegetables with low sodium content</li>
                                <li>Whole-grain options</li>
                            </ul>
                        </section>
                        <section>
                            <p>
                                Fresh produce is kept in refrigerators in an appealing way.
                            </p>
                        </section>
                        <section>
                            <p>
                            Store owners stock fresh and healthy foods by engaging with the community and customers to determine which healthy options are in demand.
                            </p>
                        </section>
                        <section>
                            <p>
                                Fresh and healthy products are placed at easy-to-see locations in the store with clear pricing, and marketing towards increasing awareness of consuming healthy foods.
                            </p>
                        </section>
                        <section>
                            <p>
                                Store owners and customers/community engage and work together to increase the supply of healthy items.
                            </p>
                        </section>
                    </div>
                </div>
                <h1>What benefits does providing healthy options provide?</h1>
                <h2>For your business</h2>
                <h3>Increase in the target market</h3>
                <p style={{textAlign: 'left', margin: 0}}>Adding plant-based food products and options to your sale can help bring new groups of customers to your store. These groups include vegetarians, people with health problems, health-conscious people, people that exercise, etc. This means that one can obtain a large diversity of customers from all around the neighborhood just by making plant-based food options more available.</p>
                <h3>Increased customer satisfaction</h3>
                <p style={{textAlign: 'left', margin: 0}}>
                    With the introduction of plant-based foods and products, corner store owners can expect that not only will they be helping the environment, but they will promote the health of their customers. Customers that previously purchased unhealthy food options would begin to change the types of products they purchase and thus begin eating healthier. Healthier customers mean happier customers, and happier customers lead to longer-lasting, promotional customers.  
                </p>
                <h3>Lower production cost and an increase in sales and profit</h3>
                <p style={{textAlign: 'left', margin: 0}}>
                    It is often assumed that by selling plant-based foods and produce, corner stores will not make enough profit. However, there is evidence against this idea. First of all, as mentioned earlier, increasing plant-based product availability results in a larger number of customers, thus resulting in more sales. Store owners would also benefit from lower production costs. Plant-based food items cost less to produce than animal-based products because fewer resources are required. Thus, if managed appropriately, one can make larger gains by introducing plant-based foods for sale. 
                </p>
                <h3>Increase in brand image and lower promotional cost</h3>
                <p style={{textAlign: 'left', margin: 0}}>
                It’s simple. Offering plant-based food improves your business’s image in the community, as it will be recognized for its efforts to help people live healthier lives. Your business will stand out from other corner stores because it will be known for its food diversity. This can also increase promotions and reduce promotional costs for your business because people will promote it by themselves. 
                </p>
                <h3>More versatility and variety</h3>
                <p style={{textAlign: 'left', margin: 0}}>
                Offering plant-based and animal-based food products generally increase the variety your store produces. Customers will not come to your store just because they like the snacks, drinks, meats or eggs you sell. They will have more options to choose from when they come to your score, thus greater variety will attract more variety of customers with different needs!
                </p>
                <h3>Better and longer shelf lives</h3>
                <p style={{textAlign: 'left', margin: 0}}>
                Unlike animal proteins, plant-based meat production occurs in sterile environments, resulting in less bacterial contamination and improving shelf life. Meat and other animal products are also susceptible to animal disease outbreaks, resulting in lower food safety. However, plant-based products are at less risk. 
                </p>
                <p style={{textAlign: 'left', margin: '20px'}}><a href="http://thefoodtrust.org/uploads/media_items/phcsn-sell-healthy-guide.original.pdf" target="_blank">This document</a> by The Food Trust show how healthy foods could mean better business for you.</p>
                <hr></hr>
                <h2>For your community</h2>
                <p style={{color: 'black'}}>Food insecurity is a serious issue in the San Francisco Bay Area, and the Mission District is no exception. We have much existing research that shows the positive effects that increasing the selection of healthy food options can have on the demand for these products in urban neighborhoods. Increasing the selection of plant-based food options in your store will make a more substantial positive influence in your community than you imagine.</p>
                <section className="community">
                    <p>Research shows that corner stores are more prevalent in low income communities.</p>
                    <ul>
                        <li>Low-income areas have significantly more as many convenience stores than higher income areas</li>
                        <li>Hispanic youth are more likely to attend schools with convenience stores and snack stores within 1,300 to 2,600 feet.</li>
                        <li>Low-income African-American youth shop at corner stores an average of twice per week, most commonly purchasing chips, candy, and soda</li>
                    </ul>
                </section>
                <section className="community">
                    <p>And finally, healthy corner store interventions have the power to positively impact the health of community members.</p>
                    <br></br>
                    <p>Successful programs have shown that:</p>
                    <ul>
                        <li>Store interventions increase sales of healthy foods as well as customer knowledge about healthy products</li>
                        <li>The amount of shelf space dedicated to fruits and vegetables at corner stores is positively associated with increased produce consumption among nearby residents</li>
                    </ul>
                </section>
                <Link to="/how" className="to-how">Next: Check out how {">"}</Link>
            </div>
        </div>
    )
}

export default Why
