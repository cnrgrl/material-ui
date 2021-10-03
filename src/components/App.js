import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme.js";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* <Toolbar /> */}
      hello
    </ThemeProvider>
  );
}

export default App;
