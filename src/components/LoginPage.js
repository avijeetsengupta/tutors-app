import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  Button:{
    backgroundColor:"#FE4A60",
  }
}));

export default function LoginPage() {
  const classes = useStyles();

  return (
    <div className="login">
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Email" />
          </Grid>
        </Grid>
        <br/>
         <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <LockIcon />
          </Grid>
          <Grid item>
            <TextField type="password" id="input-with-icon-grid" label="Password" />
          </Grid>
        </Grid>
        <br/>
        <Button className={classes.Button} variant="contained" color="primary">Login</Button>
      </div>
    </div>
  );
}
