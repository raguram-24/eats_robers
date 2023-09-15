import React from 'react'
import "./contant.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF ,faInstagram,faYoutube,faTwitter,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faPhone,faMessage,faEnvelope,faCopyright } from '@fortawesome/free-solid-svg-icons';
import img1 from "../../img/contant1.png"
import img2 from "../../img/contant2.png"
import img3 from "../../img/contant3.png"
import img4 from "../../img/img4.webp"
import img5 from "../../img/img5.jpg"
import img6 from "../../img/img6.jpg"

function Contant() {
    return (
        <div className='contant'>
            <div className='contant1'>
                <div className='image'>
                    <img src={img1}/>
                </div>
                <div className='text'>
                    <h1>The Most Romantic Restaurants in Colombo</h1>
                    <p>At first glance, Colombo may not seem like it has many romantic restaurants other than the
                         ones by the beach. But there are many places like that! And if you have the will, you can make any
                          restaurant the perfect place for a romantic evening!
                             <br/><br/>
                         Here are the top six Colombo restaurants that I think are perfect for a romantic date night with your companion.
                          You can also impress someone you are courting by bringing them here on your first date. Everything will make the mood 
                          for you, from the ambiance to the food to the decor.
                             <br/><br/>
                        Of course, you can visit these places all by yourself as well. Sometimes, we should
                         treat ourselves to a lovely evening, right?
                    </p>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className='contant1'> 
                <div className='text'>
                    <h1>Beach Wadiya</h1>
                    <p>Whether you are in the mood for crabs or some authentic Sri Lankan cuisine by the seashore,
                         Beach Wadiya is your ideal option. This beachside restaurant has a wide selection of seafood
                          platters, mostly crab-based, and carries a cheerful cooking style. 
                                  <br></br><br/>
                          The owners Mahela Jayawardene, Kumar Sangakkara, and Dhardhan Munidase created this place 
                          with a vibrant yet relaxed ambiance. Many famous personalities have visited this place, including 
                          the British Royal Family members. 
                                  <br/><br/>
                          Their simple and authentic cooking style will allow you to enjoy the real 
                          flavors of whichever dish you try. So if you visit the beach and want to indulge
                           in a prominent place, Beach Wadiya must be on your bucket list.
                    </p>
                </div>
                <div className='image'>
                    <img src={img2}/>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className='contant1'> 
                <div className='image'>
                    <img src={img3}/>
                </div>
                <div className='text'>
                    <h1>Barracuda Seafood Curry</h1>
                    <p>Barracuda Seafood & Grill has three restaurants, two of which are located by the beach.
                         The most popular one is located at 41/2 Wasala Road, Dehiwala, near the Station restaurant. 
                         The inland one, Breeze Barracuda, is located at 10 Galle Lake Drive, Colombo.
                                 <br/><br></br>
                         Barracuda is well-known for its Sri Lankan take on Chinese food. 
                         The interior has a mangrove canopy setting, which makes you feel closer to nature.
                          There is also live music six days a week in Barracuda in Dehiwala, a decent addition to enjoying the sunset.
                    </p>
                </div>
                
            </div>


            {/* <div className='contant1'> 
                <div className='text'></div>
                <div className='image'>
                    <img src={img1}/>
                </div>
            </div> */}
            <br/>
            <div className='contact'>
                <div > <h1>Contact Us</h1></div>
                <div className='social'>
                     <h3>Social Media</h3>
                     <div>
                    <a href='https://www.youtube.com/watch?v=fWy860jFS0Q&ab_channel=WikiPeaks'><FontAwesomeIcon icon={faYoutube} className='sicon' /></a>
                    <a href=''><FontAwesomeIcon icon={faTwitter} className='sicon'/></a>
                    <a href=''><FontAwesomeIcon icon={faFacebookF} className='sicon'/></a>
                    <a><FontAwesomeIcon icon={faInstagram} className='sicon'/></a></div>
                </div>
                <br/>
                <br/>
                <div className='contactmedia'>
                    <div className='media'>
                         <FontAwesomeIcon icon={faPhone} className='icon' />
                         <p>Call us</p>
                         <p>0773016416</p>
                    </div>
                    <div className='media'>
                        <FontAwesomeIcon icon={faMessage} className='icon'/>
                        <p>Text us</p>
                        <p>0701360797</p>
                    </div>
                    <div className='media'>
                         <FontAwesomeIcon icon={faWhatsapp} className='icon'/>
                         <p>Chat us</p>
                         <p>+94701360797</p>
                    </div>
                    <div className='media'>
                         <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                         <p>Mail us</p>
                         <p>Eatsrober123@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='footer'>
                    Copyright <FontAwesomeIcon icon={faCopyright} className='i' /> Eatsrober
            </div>
        </div>
    )
}

export default Contant
