import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import ReactGA from "react-ga";

function recordPageView(page) {
  ReactGA.pageview(page);
}

class Resume extends Component {
  componentDidMount() {
    if (this.props.location.pathname === "/resume") {
      recordPageView(this.props.location.pathname);
    } else if (this.props.location.pathname === "/") {
      recordPageView("/");
    }
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname === "/resume" &&
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      recordPageView(this.props.location.pathname);
    } else if (
      this.props.location.pathname === "/" &&
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      recordPageView("/");
    }
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          marginTop: " 50vh",
          textAlign: "center"
        }}
      >
        <Typography variant="title" color="inherit">
          Coming Soon
        </Typography>
      </div>
    );
  }
}

export default Resume;
