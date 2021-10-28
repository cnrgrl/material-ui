import React from "react";
import { makeStyles } from "@material-ui/core";
import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    verticalAlign: "bottom",
    width: "25em",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    fontFamily: "Arial",
    color: "white",
    fontWeight: "bold",
    fontSize: "0.75rem",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "6em",
    [theme.breakpoints.down("xs")]: {
      right: "1em",
    },
  },
  icon: {
    height: "4em",
    width: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "3em",
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2em",
      width: "auto",
    },
  },
}));

const Footer = (props) => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Hidden mdDown>
          <Grid container justify="center" className={classes.mainContainer}>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                {" "}
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(0);
                  }}
                  to="/"
                  className={classes.link}
                >
                  Home
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                {" "}
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(0);
                  }}
                  to="/services"
                  className={classes.link}
                >
                  Services
                </Grid>
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(1);
                  }}
                  to="/customsoftware"
                  className={classes.link}
                >
                  Custom Development
                </Grid>
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(2);
                  }}
                  to="/mobileapps"
                  className={classes.link}
                >
                  Mobile Development
                </Grid>
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(1);
                    props.setSelectedIndex(3);
                  }}
                  to="/websites"
                  className={classes.link}
                >
                  Web development
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                {" "}
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(2);
                  }}
                  to="/revolution"
                  className={classes.link}
                >
                  Revolution
                </Grid>
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(2);
                  }}
                  to="/"
                  className={classes.link}
                >
                  Vision
                </Grid>
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(2);
                  }}
                  to="/"
                  className={classes.link}
                >
                  Technology
                </Grid>
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(2);
                  }}
                  to="/"
                  className={classes.link}
                >
                  Proccess
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                {" "}
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(3);
                  }}
                  to="/about"
                  className={classes.link}
                >
                  About
                </Grid>
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(3);
                  }}
                  to="/"
                  className={classes.link}
                >
                  History
                </Grid>
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(3);
                  }}
                  to="/"
                  className={classes.link}
                >
                  Team
                </Grid>
              </Grid>
            </Grid>{" "}
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                {" "}
                <Grid
                  item
                  component={Link}
                  onClick={() => {
                    props.setValue(4);
                  }}
                  to="/contact"
                  className={classes.link}
                >
                  Contact Us
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <img
          src={footerAdornment}
          alt="footerAdornment"
          className={classes.adornment}
        />
        <Grid
          container
          justifyContent="flex-end"
          spacing={2}
          className={classes.socialContainer}
        >
          <Grid
            item
            component={"a"}
            href="http://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={facebook} alt="facebook" className={classes.icon} />
          </Grid>
          <Grid
            item
            component={"a"}
            href="http://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="twitter" className={classes.icon} />
          </Grid>
          <Grid
            item
            component={"a"}
            href="http://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={instagram} alt="instagram" className={classes.icon} />
          </Grid>
        </Grid>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
