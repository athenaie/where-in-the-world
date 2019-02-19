import React, { Component } from "react";
import logo from '../../Globe.svg';
import space from '../../space.jpg'
import { withStyles } from '@material-ui/core';
import earthStyles from "./styles";
import Typography from "@material-ui/core/Typography";

class Earth extends Component {
    render () {
        const { classes } = this.props;
        let style = {
            backgroundImage: "url(" + space + ")",
            textAlign: "center"
        }
        return (
            <header style={style} className={classes.header}>
            <Typography variant="h3" className={classes.heading}>Where in the world is </Typography>
            <img src={logo} className={classes.logo} alt="logo" />
            <Typography variant="h3" className={classes.heading}>Marissa Baden?</Typography>
            </header>
        );
    }
}

export default withStyles(earthStyles, {withTheme: true})(Earth)