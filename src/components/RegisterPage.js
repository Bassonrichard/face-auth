import React, { Component } from "react";
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
import { FaceAuthRegister } from 'api/ApiUrls'
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  webcam: {
    width: "95%",
    height: "95%",
    margin: theme.spacing(1, 1, 1)
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
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  avatarProgress: {
    position: 'absolute',
    zIndex: 1,
    top: -6,
    left: -6
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
});

class RegisterPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      dataUri: "",     
      loading: false
    };
  }


  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    
  let dataUri = this.webcam.getScreenshot()

    this.setState({
      loading: true
     })

    fetch(FaceAuthRegister, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        DataUri: dataUri,
        Email: this.state.email,
        FullName: this.state.firstName + " " + this.state.lastName
      })
    }).then(response => {

      this.setState({
        loading: true
       })

      this.props.history.push("/login")

    }).catch(error => {
        console.log(error)
      });

  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  }

  render() {
    const { email, firstName, lastName } = this.state;
    const values = { email, firstName, lastName }

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
        <div className={classes.wrapper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>         
          { this.state.loading && <CircularProgress size={68} className={classes.avatarProgress}/> }
        </div>
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