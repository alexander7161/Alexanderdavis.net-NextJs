import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";

const styles = {
  root: {
    flexGrow: 1,
    top: 0,
    left: 0,
    right: 0,
    width: "100%"
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Typography variant="title" color="inherit">
          {props.location.pathname === "/resume"
            ? "Resume"
            : props.location.pathname === "/"
              ? "Projects"
              : ""}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ButtonAppBar));
