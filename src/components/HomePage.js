import React from 'react'
import Banner from '../images/banner.png';
import InfoContainer from './InfoContainer';




export default function HomePage() {

    return (
        <>
        <div className="home">
            <div className="banner-intro">
                <div className="search-box">
                  <p>We Help Students and Tutors Find Each Other</p>
              <span>Find the perfect teacher in your city or online</span>
               
                </div>
             
               <div className="banner">
                   <img src={Banner} alt="bannner"/>
               </div>
            </div>
        
        </div>
        <InfoContainer/>
        </>
    )
}
