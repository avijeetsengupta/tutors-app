import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar  from '@material-ui/core/Toolbar';
import Typography  from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Button  from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Logo from '../images/presentation.png';
import SimpleSelect from './SimpleSelect';
import '../style/navrbar.css'
// import Drawer from './Drawer';
// import TemporaryDrawer from './Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
   abRoot: {
    backgroundColor: "red"
  },
  title: {
    flexGrow: 1,
  },
  Button:{
    fontWeight:"600"
  },
  
}));
export default function Navbar() {
     const classes = useStyles();
    return (
      
        <AppBar className="navbar"  style={{ background:"#0d47a1"}}>
            <Toolbar>
               
               <img  src={Logo} alt="logo"/>
               <h3 className={classes.title}>My Tutor Finder</h3>
              <Typography>
            
              </Typography>
             
              <div className="resp-nav">
              <Button className={classes.Button} color="inherit" component={Link} to="/">Home</Button>
            <Button className={classes.Button} color="inherit" component={Link} to="/findtutor">Find Tutor</Button>
            {/* <Button className={classes.Button} color="inherit" component={Link} to="/login">login</Button> */}
            {/* <Button className={classes.Button} color="inherit" component={Link} to="/signup">signup</Button> */}
            <SimpleSelect />
            {/* <TemporaryDrawer /> */}
            </div>
            </Toolbar>

        </AppBar>
       
    )
}
