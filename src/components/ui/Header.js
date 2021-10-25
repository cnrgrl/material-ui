import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useScrollTrigger } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import logo from "../../assets/logo.svg";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

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
  logo: { height: "8em" },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

const Header = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyle();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItems = [
    { name: "Services", link: "/services" },
    { name: "Custom Development", link: "/customsoftware" },
    { name: "Mobile Development", link: "/mobileapps" },
    { name: "Web Development", link: "/websites" },
  ];

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    // if (window.location.pathname === "/" && value !== 0) {
    //   setValue(0);
    // } else if (window.location.pathname === "/services" && value !== 1) {
    //   setValue(1);
    // } else if (window.location.pathname === "/revolution" && value !== 2) {
    //   setValue(2);
    // } else if (window.location.pathname === "/about" && value !== 3) {
    //   setValue(3);
    // } else if (window.location.pathname === "/contact" && value !== 4) {
    //   setValue(4);
    // } else if (window.location.pathname === "/estimate" && value !== 5) {
    //   setValue(5);
    // }

    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/about":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;
      case "/estimate":
        if (value !== 5) {
          setValue(5);
        }
        break;
      case "/customsoftware":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      default:
        break;
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home"></Tab>
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? true : undefined}
          onMouseOver={(event) => handleClick(event)}
          className={classes.tab}
          component={Link}
          to="/services"
          label="Services"
        ></Tab>
        <Tab
          className={classes.tab}
          component={Link}
          to="/revolutions"
          label="The Revoluton"
        ></Tab>
        <Tab
          className={classes.tab}
          component={Link}
          to="/about"
          label="About Us"
        ></Tab>
        <Tab
          className={classes.tab}
          component={Link}
          to="/contact"
          label="Contact Us"
        ></Tab>
      </Tabs>{" "}
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }} //??? neden?
        elevation="0"
        classes={{ paper: classes.menu }}
      >
        {menuItems.map((item, i) => (
          <MenuItem
            key={item}
            onClick={(event) => {
              handleClose();
              handleMenuItemClick(event, i);
              setValue(1);
            }}
            selected={i === selectedIndex && value === 1}
            component={Link}
            to={item.link}
            classes={{ root: classes.menuItem }}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {" "}
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img alt="company logo" src={logo} className={classes.logo} />
            </Button>
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
