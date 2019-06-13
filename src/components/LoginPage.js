import React, { Component } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Webcam from "react-webcam";

const styles  = theme => ({
  webcam:{
    width:"95%",
    height:"95%",
    margin: theme.spacing(1, 1, 1),
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
});

class LoginPage extends Component {

  setRef = webcam => {
    this.webcam = webcam;
  };
 
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc);
  };
 

  render(){

    const { classes } = this.props;
    const videoConstraints = {
      facingMode: "user"
    };
  
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <Paper>
              <Webcam
                audio={false}
                imageSmoothing={true}
                ref={this.setRef}
                className={classes.webcam}
                screenshotFormat="image/png"
                videoConstraints={videoConstraints} />
          </Paper>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.capture}
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
    );
  } 
} 

export default withStyles(styles, { withTheme: true })(LoginPage);