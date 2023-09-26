import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red["100"],
    },
    secondary: { main: grey["700"] },
  },
});

export default theme;
