import { createMuiTheme } from "@material-ui/core/styles";
import { green, orange } from '@material-ui/core/colors';

const  theme =  createMuiTheme({
  overrides:{
  palette:{
    primary: green[500],
  }}
});
export default theme;