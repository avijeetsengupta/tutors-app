import React from 'react'
import Banner from '../images/banner.png';

export default function BannerInfo() {
    return (
        <div className="banner">
            <div className="left-banner">
             <p>We Help Students and Tutors Find Each Other</p>
              <span>Find the perfect teacher in your city or online</span>
            </div>
            <div className="right-banner">
              <img src={Banner} alt="bannner"/>
            </div>
            
        </div>
    )
}
