import React,{useState} from 'react'

import CityList from '../jsonData/cities.json';
import StateList from '../jsonData/states.json';
import ShowTeacher from './ShowTeacher';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FindTutor() {
    const classes = useStyles();
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
                 {/* --------{filter location}------ */}
                 <div className="location">
                      <FormControl className={classes.formControl} >
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          onChange={(e)=>setSelectStates(e.target.value)}
        >
          
        {StateList.map((states)=>{return <MenuItem key={states.id} value={states.states}>{states.states}</MenuItem>
            })}
        </Select>
      </FormControl>

 {/* -------{filter cities}------------ */}
   <FormControl className={classes.formControl} >
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
         onChange={(e)=>setSelectCity(e.target.value)}
        >
          
       {CityList.filter(cityData=>cityData.state===selectStates).map((cityListData)=>{
return <MenuItem key={cityListData.id}value={cityListData.name}>
    {cityListData.name}
    </MenuItem> })}
        </Select>
      </FormControl>
  
   <TextField id="standard-search" label="Search Subject" type="search"  placeholder="Enter Course or Subject keywords to Search"
     value={selectSubject} onChange={(e)=>setSelectSubject(e.target.value)}
     />
 </div>
    {/* {CityList.map((city)=>{
        return  <option key={city.id}value={city.name}>{city.name}</option>
    })} */}

    {/* -------{search box for subject}------------ */}
              
           <ShowTeacher selectCity={selectCity}  selectSubject={selectSubject}/>
         </div>
               
    )
}
