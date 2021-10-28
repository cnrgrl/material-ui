import React from "react";
import { makeStyles } from "@material-ui/core";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

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
}));

const Footer = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        {" "}
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              {" "}
              <Grid item component={Link} to="/" className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              {" "}
              <Grid item component={Link} to="/" className={classes.link}>
                Services
              </Grid>
              <Grid item component={Link} to="/" className={classes.link}>
                Custom Development
              </Grid>
              <Grid item component={Link} to="/" className={classes.link}>
                Mobile Development
              </Grid>
              <Grid item component={Link} to="/" className={classes.link}>
                Web development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              {" "}
              <Grid item component={Link} to="/" className={classes.link}>
                Revolution
              </Grid>
              <Grid item component={Link} to="/" className={classes.link}>
                Vision
              </Grid>
              <Grid item component={Link} to="/" className={classes.link}>
                Technology
              </Grid>
              <Grid item component={Link} to="/" className={classes.link}>
                Proccess
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              {" "}
              <Grid item component={Link} to="/" className={classes.link}>
                About
              </Grid>
              <Grid item component={Link} to="/" className={classes.link}>
                History
              </Grid>
              <Grid item component={Link} to="/" className={classes.link}>
                Team
              </Grid>
            </Grid>
          </Grid>{" "}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              {" "}
              <Grid item component={Link} to="/" className={classes.link}>
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <img
          src={footerAdornment}
          alt="footerAdornment"
          className={classes.adornment}
        />
      </footer>
    </React.Fragment>
  );
};

export default Footer;
