import React, { useEffect, useState, useMemo } from "react";
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
// import { Icon } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";
// import MenuIcon from "@mui/icons-material/Menu";
import { List, ListItem, ListItemText } from "@material-ui/core";

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
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  tabContainer: {
    marginLeft: "auto",
  },

  drawerContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItemSelected: {
    opacity: "1 !important",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawItemEstimate: { backgroundColor: theme.palette.common.orange },
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
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuItems = useMemo(
    () => [
      { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
      {
        name: "Custom Development",
        link: "/customsoftware",
        activeIndex: 1,
        selectedIndex: 1,
      },
      {
        name: "Mobile Development",
        link: "/mobileapps",
        activeIndex: 1,
        selectedIndex: 2,
      },
      {
        name: "Web Development",
        link: "/websites",
        activeIndex: 1,
        selectedIndex: 3,
      },
    ],
    []
  );

  const routes = useMemo(
    () => [
      { name: "Home", link: "/", activeIndex: 0 },
      { name: "Services", link: "/services", activeIndex: 1 },
      { name: "The Revolution", link: "/revolution", activeIndex: 2 },
      { name: "About Us", link: "/about", activeIndex: 3 },
      { name: "Contact Us", link: "/contact", activeIndex: 4 },
      { name: "Free Estimate", link: "/estimate", activeIndex: 5 },
    ],
    []
  );
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

    [...menuItems, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.activeIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;

        default:
          break;
      }
    });

    // switch (window.location.pathname) {
    //   case "/":
    //     if (value !== 0) {
    //       setValue(0);
    //     }
    //     break;
    //   case "/services":
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(0);
    //     }
    //     break;
    //   case "/revolution":
    //     if (value !== 2) {
    //       setValue(2);
    //     }
    //     break;
    //   case "/about":
    //     if (value !== 3) {
    //       setValue(3);
    //     }
    //     break;
    //   case "/contact":
    //     if (value !== 4) {
    //       setValue(4);
    //     }
    //     break;
    //   case "/estimate":
    //     if (value !== 5) {
    //       setValue(5);
    //     }
    //     break;
    //   case "/customsoftware":
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(1);
    //     }
    //     break;
    //   case "/mobileapps":
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(2);
    //     }
    //     break;
    //   case "/websites":
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(3);
    //     }
    //     break;
    //   default:
    //     break;
    // }
  }, [value, selectedIndex, menuItems, routes]);

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
          to="/revolution"
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
        open={openMenu}
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

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          <ListItem
            divider
            button
            component={Link}
            to="/"
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            selected={value === 0}
          >
            <ListItemText
              className={
                value === 0
                  ? [classes.drawerItemSelected, classes.drawerItem]
                  : [classes.drawerItem]
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/services"
            selected={value === 1}
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
          >
            {" "}
            <ListItemText
              className={
                value === 1
                  ? [classes.drawerItemSelected, classes.drawerItem]
                  : [classes.drawerItem]
              }
              disableTypography
            >
              Services
            </ListItemText>
          </ListItem>{" "}
          <ListItem
            divider
            button
            component={Link}
            to="/revolution"
            selected={value === 2}
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
          >
            {" "}
            <ListItemText
              className={
                value === 2
                  ? [classes.drawerItemSelected, classes.drawerItem]
                  : [classes.drawerItem]
              }
              disableTypography
            >
              The Revolution
            </ListItemText>
          </ListItem>{" "}
          <ListItem
            divider
            button
            component={Link}
            to="/about"
            selected={value === 3}
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
          >
            {" "}
            <ListItemText
              className={
                value === 3
                  ? [classes.drawerItemSelected, classes.drawerItem]
                  : [classes.drawerItem]
              }
              disableTypography
            >
              {" "}
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 4}
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
          >
            {" "}
            <ListItemText
              className={
                value === 4
                  ? [classes.drawerItemSelected, classes.drawerItem]
                  : [classes.drawerItem]
              }
              disableTypography
            >
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/estimate"
            selected={value === 5}
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            className={classes.drawItemEstimate}
          >
            {" "}
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        menu
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
