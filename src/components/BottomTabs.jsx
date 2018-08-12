import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonIcon from "@material-ui/icons/Person";
import ListIcon from "@material-ui/icons/List";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const styles = {
  root: {
    width: 100 + "%",
    position: "fixed",
    bottom: 0,
    borderTop: "0.5px solid lightgray"
  },
  tabsIndicator: {
    top: 0
  }
};

class BottomTabs extends React.Component {
  constructor(props) {
    super(props);
    var initialState = {};
    initialState.value = this.getValue(props.location.pathname);
    this.state = initialState;
  }

  getValue(pathname) {
    if (pathname === "/resume") {
      return 1;
    } else if (pathname === "/") {
      return 0;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      const value = this.getValue(this.props.location.pathname);
      this.setState({ value: value });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
    switch (value) {
      case 0:
        this.props.history.push("/");
        break;
      case 1:
        this.props.history.push("/resume");
        break;
      default:
    }
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          centered
          fullWidth
          value={value}
          onChange={this.handleChange}
          classes={{ indicator: classes.tabsIndicator }}
        >
          <Tab label="Projects" icon={<ListIcon />} />
          <Tab label="Résumé" icon={<PersonIcon />} />
        </Tabs>
      </div>
    );
  }
}

BottomTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(connect()(withStyles(styles)(BottomTabs)));
