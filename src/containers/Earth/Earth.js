import React, { Component } from "react";
import logo from '../../Globe.svg';
import { withStyles } from '@material-ui/core';
import earthStyles from "./styles";
import Typography from "@material-ui/core/Typography";

class Earth extends Component {
    render () {
        const { classes } = this.props;
        return (
            <div>
            <header className={classes.header}>
            <Typography variant="headline" className={classes.heading}>Where in the world is </Typography>
            <img src={logo} className={classes.logo} alt="logo" />
            <Typography variant="headline" className={classes.heading}>Marissa Baden?</Typography>
            </header>
            </div>
        );
    }
}

export default withStyles(earthStyles, {withTheme: true})(Earth)