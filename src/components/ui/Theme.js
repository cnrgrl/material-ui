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
  },
});
