import React from 'react'
import Success from '../images/success.png'
import OneToOne from '../images/onetoone.png'
import Aplus from '../images/aplus.png'
import Dollar from '../images/dollar.png'

export default function InfoContainer() {
    return (
        <div className="info">
            <div className="outer">
            <h1>Why Home Tuition?</h1>
            <div className="under-info">
                <div className="student">
                    <h3>Students/Parents</h3>
                 <div className="info1">
                     <img src={Success} alt={Success}/>
                     <p>Home Tuition is #1 Secret of Success. Its a well known fact that home tuition helps students to succeed. Home tutors provide personalized attention</p>
                 </div>
                 <div className="info1">
                     <img src={OneToOne} alt={OneToOne}/>
                     <p>Expert one-to-one guidance from home tutors helps students. Here student gets 100% attention and can ask doubts without any hesitation</p>
                 </div>
                 <div className="info1">
                     <img src={Aplus} alt={Aplus}/>
                     <p>Guided students learn & achieve Better Grades! Numerous students have benefitted from expert guidance from home tutors.</p>
                 </div>
                </div>
                <div className="teacher">
                    <h3>Tutors</h3>
               <div className="info1">
                   <img src=""/>
                   <p>Be your own Boss!!! You concentrate on teaching students as home tutor and we help you find home tuition needs (part time teaching jobs) posted by students</p>
               </div>
               <div className="info1">
                   <img src=""/>
                   <p>Home Tuition is Flexible and Rewarding. Teach as home tutor at your convenient timings. Few hours of home tutoring a day can help you earn decent income</p>
               </div>
               <div className="info1">
                   <img src={Dollar} alt={Dollar}/>
                   <p>Home tutoring is the best part time job option. Thousands of parents are offering part time teaching jobs for home tutors. Work part time and earn additional income!</p>
               </div>
                </div>
            </div>
        </div>
        </div>
    )
}
