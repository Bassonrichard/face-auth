import React, {Component} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Webcam from "react-webcam";
import { withStyles } from "@material-ui/core/styles";

const styles  = theme => ({
  webcam:{
    width:"95%",
    height:"95%",
    margin: theme.spacing(1, 1, 1)
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class RegisterPage extends Component  {
  state = {
    firstName:"",
    lastName:"",
    email: "",
    DataUri: ""
 }


  setRef = webcam => {
    this.webcam = webcam;
  };
 
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      DataUri:imageSrc
    })

    if(this.props.DataUri != null){
      console.log(this.props.DataUri)
    }

  };
 
  handleChange = input => e => {
    this.setState({
        [input]: e.target.value
    });
  }

render(){
  const {email,firstName,lastName} = this.state;
  const values = {email,firstName,lastName}

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const { classes } = this.props;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
           Register
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
           <Grid item xs={12}>
           <Paper>
              <Webcam
                audio={false}
                imageSmoothing={true}
                ref={this.setRef}
                className={classes.webcam}
                screenshotFormat="image/png"
                videoConstraints={videoConstraints} />
            </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={this.handleChange('firstName')}
                defaultValue={values.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={this.handleChange('lastName')}
                defaultValue={values.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.handleChange('email')}
                defaultValue={values.email}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.capture}
            className={classes.submit}>
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
}
export default withStyles(styles, { withTheme: true })(RegisterPage);