import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useScrollTrigger } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import logo from "../../assets/logo.svg";
import { Button } from "@material-ui/core";

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyle = makeStyles((theme) => ({
  toolbarMargin: { ...theme.mixins.toolbar, bottomMargin: "3em" },
  logo: { height: "7em" },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    marginLeft: "25px",
    minWidth: "10px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "40px",
  },
}));

const Header = (props) => {
  const classes = useStyle();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <React.Fragment>
      {" "}
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <img alt="company logo" src={logo} className={classes.logo} />
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab className={classes.tab} label="Home"></Tab>
              <Tab className={classes.tab} label="Services"></Tab>
              <Tab className={classes.tab} label="The Revoluton"></Tab>
              <Tab className={classes.tab} label="About Us"></Tab>
              <Tab className={classes.tab} label="Contact Us"></Tab>
            </Tabs>{" "}
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
