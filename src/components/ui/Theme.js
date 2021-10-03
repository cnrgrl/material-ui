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
    h3: { fontWeight: 700 },
  },
});
