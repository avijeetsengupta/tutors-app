import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import CityList from '../cities.json';
import StateList from '../states.json';
import ShowTeacher from './ShowTeacher';



export default function SearchBox() {
   let history=useHistory();
   //state to handle state and cities 
    const[selectStates,setSelectStates]=useState('');
     const[selectCity,setSelectCity]=useState('');
     const[selectSubject,setSelectSubject]=useState('');
    // const handleSubmit = () => {
    //     history.push('/searchdata',{selectCity})
       
    // }
   
   // history.push('/HomePage')
    return (
             <div className="input-box">
                 {/* --------{filter locotion}------ */}
                 <div className="location">
                      {/* ------{filter states} --------*/}
 <select  placeholder="Select states"  onChange={(e)=>setSelectStates(e.target.value)}>
 <option value="">--Select States--</option>
{StateList.map((states)=>{return  <option key={states.id} value={states.states}>{states.states}
</option>})}
</select>
 {/* -------{filter cities}------------ */}
 <select  placeholder="Select City" onChange={(e)=>setSelectCity(e.target.value)}>
<option value="" >--Select City--</option>
{CityList.filter(cityData=>cityData.state===selectStates).map((cityListData)=>{
return <option key={cityListData.id}value={cityListData.name}>
    {cityListData.name}
    </option> })}
</select>
 </div>
    {/* {CityList.map((city)=>{
        return  <option key={city.id}value={city.name}>{city.name}</option>
    })} */}

    {/* -------{search box for subject}------------ */}
               <div className="search">  
     <input type="search" placeholder="Enter Course or Subject keywords to Search"
     value={selectSubject} onChange={(e)=>setSelectSubject(e.target.value)}
     />
     <button onClick={()=>history.push("/searchdata")}>Search</button>
            </div>
           <ShowTeacher selectCity={selectCity}  selectSubject={selectSubject}/>
         </div>
               
    )
}
