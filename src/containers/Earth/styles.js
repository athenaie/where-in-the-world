const styles = theme => ({
logo: {
    animation: "logoSpin infinite 40s linear",
    height: "60vmin",
    "&:hover":{
        animationPlayState: "paused"
    }
},
  
header: {
    backgroundColor: "#000000",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
},

heading: {
    fontFamily: theme.fonts.dainty,
    fontWeight: "bold",
    color: theme.palette.primary.light
},
  
"@keyframes logoSpin": {
    from : {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    }
}

});

export default styles;
  