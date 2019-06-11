import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class LandingPage extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className="LandingPage">
        <Typography variant="h1" align="center" color="primary" gutterBottom={true}>
          Landing Page
      </Typography>

        <Paper>
          <Grid container justify="center" alignItems="center" spacing={2}>

            <Grid item md={2}>
              <Button variant="outlined" color="primary" className={classes.submit}>
                Login
          </Button>
            </Grid>

            <Grid item md={2}>
              <Button variant="outlined" color="primary" className={classes.submit}>
                Register
          </Button>
            </Grid>

          </Grid>

        </Paper>


      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(LandingPage);