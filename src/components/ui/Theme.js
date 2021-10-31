import { createTheme } from "@material-ui/core";

const arcBlue = "#0b72b9";
const arcOrange = "#ffba60";

export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: { main: `${arcOrange}` },
  },
  typography: {
    tab: {
      fontSize: "1rem",
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
    },
    h2: {
      fontSize: "3em",
      fontWeight: 700,
      fontFamily: "Raleway",
      color: `${arcBlue}`,
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",

      textTransform: "none",
      color: "white",
    },
  },
});
