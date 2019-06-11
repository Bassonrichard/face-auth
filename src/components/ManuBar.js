import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { Home, LockOpen, AccountBox } from '@material-ui/icons';


export default function MenuBar() {

  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className="MenuBar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            Face Auth
         </Typography>
          <br />
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            centered
            variant="fullWidth">

            <Tab label="Home" icon={<Home />} component={Link} to="/" />
            <Tab label="Login" icon={<LockOpen />} component={Link} to="/Login" />
            <Tab label="Register" icon={<AccountBox />} component={Link} to="/Register" />

          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
