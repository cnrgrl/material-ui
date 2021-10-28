import React from "react";
import { makeStyles } from "@material-ui/core";
import footerAdornment from "../../assets/Footer Adornment.svg";

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
}));

const Footer = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <footer className={classes.footer}>
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
