import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Avatar from "@material-ui/core/Avatar";
import Webcam from "react-webcam";

const styles = theme => ({
  paper: {
    display: 'flex',
    alignItems: 'center',  
    margin: theme.spacing(3, 1, 1)
  },
  heading:{
    margin: theme.spacing(1, 1, 1)
  },
  avatar: {
    width: 150,
    height: 150,
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
});

class LandingPage extends Component {

  render() {
    const { classes } = this.props;
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    return (
      <div className="LandingPage">


      <Container component="main" maxWidth="sm">
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
          <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
          </Avatar>
          
          <Typography variant="h1" color="primary" align="center" gutterBottom={true} className={classes.heading}>
                 Face Auth
          </Typography>
        </Paper>
      </Container>


      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(LandingPage);