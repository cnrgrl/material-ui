import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useScrollTrigger } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import logo from "../../assets/logo.svg";

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
}));

const Header = (props) => {
  const classes = useStyle();
  return (
    <React.Fragment>
      {" "}
      <ElevationScroll>
        <AppBar position="fixed" color="secondary">
          <Toolbar disableGutters>
            <img alt="company logo" src={logo} className={classes.logo} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
