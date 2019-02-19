import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from "./components/material-ui/theme";
import Earth from "./containers/Earth/Earth"
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Earth />
      </MuiThemeProvider>
   );
  }
}

export default App;
