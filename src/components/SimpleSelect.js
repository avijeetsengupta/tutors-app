import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Link} from 'react-router-dom';



    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
      
      export default function SimpleSelect() {
        const classes = useStyles();
        const [age, setAge] = React.useState('');
      
        const handleChange = (event) => {
          setAge(event.target.value);
        };


    return (
        <div>

     <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Setting</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}> <Link to="/signup">Sign up</Link> </MenuItem>
          <MenuItem value={20}>Profile</MenuItem>
          <MenuItem value={30}>Setting</MenuItem>
        </Select>
      </FormControl>
        </div>
    )
}


