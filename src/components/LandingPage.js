import React from "react";
import { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Lottie from "react-lottie";
import animationData from "../animations/landinganimation/data";
import ButtonArrow from "./ui/ButtonArrow";

const useStyle = makeStyles((theme) => ({
  hyy: {
    ...theme.typography.h2,
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginLeft: "10%",
    marginTop: "2em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    marginRight: 40,
    height: 45,
    width: 140,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    width: 145,
    height: 45,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "0.9rem",
    padding: 0,
  },
  buttonContainer: {
    marginTop: "1em",
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: { marginTop: "3em" },
    [theme.breakpoints.down("xs")]: { marginTop: "2em" },
  },
  textContainer: { minWidth: "21.5em", marginLeft: "1em" },
}));

const LandingPage = (props) => {
  const theme = useTheme();

  const classes = useStyle();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    // <Grid container direction="column">
    //   <Grid item>
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.mainContainer}
    >
      <Grid sm item className={classes.textContainer}>
        <Typography variant="h2" align="center">
          Bringing West Coast Technology
          <br />
          to the Midwest
        </Typography>

        <Grid
          container
          justifyContent="center"
          className={classes.buttonContainer}
        >
          <Grid item>
            <Button variant="contained" className={classes.estimateButton}>
              Free Estimate
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" className={classes.learnButtonHero}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                height={15}
                width={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid sm item className={classes.animation}>
        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
      </Grid>
    </Grid>
    //   </Grid>
    // </Grid>
  );
};

export default LandingPage;
