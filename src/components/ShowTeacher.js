import React from 'react'
import TeacherJsom from '../teacherData.json'
import UserImg from '../images/user.png'

export default function ShowTeacher({selectCity,selectSubject}) {
   
   
    return (
        <div className="teacher">
          <div className="teacher-list">
           {TeacherJsom.filter(tList=>tList.address.city===selectCity && tList.subject===selectSubject).map((list)=>{
               return <div className="teacher-details">
                   <img src={UserImg} alt={list.name}/>
                   <div className="details tdata">
                       <span>Name: <h3>{list.name}</h3></span>
                       <span>Email: <h3>{list.email}</h3></span> 
                 </div>
                 <div className="subject tdata">
                    <span>Class: <h3>{list.classes.class}</h3></span>
                       <span>Subject: <h3>{list.subject}</h3></span> 
                 </div>
                       <div className="address tdata">
                           <span>Address:</span>
                        <h3>{list.address.street}</h3>
                        <h3>{list.address.suite}</h3>
                        <h3>{list.address.city}</h3>
                           </div>
                           <div className="btn tdata">
                               <button>Contact</button>
                               <button>Demo Class</button>
                               </div>
                   </div>
           })
           
           }

          </div>
        </div>
    )
}

