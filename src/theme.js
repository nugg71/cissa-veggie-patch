import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import green from '@material-ui/core/colors/green';
import brown from '@material-ui/core/colors/brown';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: brown[500],
    },
  },
});

export default responsiveFontSizes(theme);