import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonIcon from "@material-ui/icons/Person";
import ListIcon from "@material-ui/icons/List";
import { connect } from "react-redux";
import { goToProjects, goToResume } from "./store/currentPage/actions";
import { withRouter } from "react-router";

const styles = {
  root: {
    width: 100 + "%",
    position: "fixed",
    bottom: 0,
    borderTop: "0.5px solid lightgray"
  }
};

class SimpleBottomNavigation extends React.Component {
  constructor(props) {
    super(props);
    var initialState = {};
    if (props.location.pathname === "/resume") {
      initialState.value = 1;
    } else if (props.location.pathname === "/") {
      initialState.value = 0;
    }
    this.state = initialState;
  }

  handleChange = (event, value) => {
    this.setState({ value });
    switch (value) {
      case 0:
        this.props.dispatch(goToProjects());
        break;
      case 1:
        this.props.dispatch(goToResume());
        break;
      default:
    }
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Projects" icon={<ListIcon />} />
        <BottomNavigationAction label="Résumé" icon={<PersonIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(
  connect()(withStyles(styles)(SimpleBottomNavigation))
);
