import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: "#ffffff",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
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
  },
}));

export default function LandingPage() {

  const classes = useStyles();

  return (
    <div className="LandingPage">
      <Typography variant="h1" align="center" color="primary" gutterBottom={true}>
        Landing Page
      </Typography>

      <Paper>
        <Grid container justify="center" alignItems="center" spacing={2}>

          <Grid item md={2}>
          <Button  variant="outlined" color="primary" className={classes.submit}>
            Login 
          </Button>
          </Grid>

          <Grid item md={2}>
          <Button  variant="outlined" color="primary" className={classes.submit}>
            Login 
          </Button>
          </Grid>

        </Grid>

      </Paper>


    </div>
  );
};