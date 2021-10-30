import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";

import Lottie from "react-lottie";
import animationData from "../../animations/landinganimation/data.js";

const useStyle = makeStyles(() => ({}));

const LandingPage = () => {
  const classes = useStyle();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={"50%"} width={"50%"} />;
};

export default LandingPage;
