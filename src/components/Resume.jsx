import React, { Component } from "react";
import ReactGA from "react-ga";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    overflowY: "scroll",
    height: "calc(100vh - 56px - 75px)",
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: { 
      height: "calc(100vh - 48px - 75px)", 
    }, 
    [theme.breakpoints.up('sm')]: { 
      height: "calc(100vh - 64px - 75px)", 
    } 
  }
});

function recordPageView(page) {
  ReactGA.pageview(page);
}

function WorkIcon() {
  return <Icon className="fab fa-lastfm" style={{ color: "white" }} />
}

function SchoolIcon() {
  return <Icon className="fab fa-lastfm" style={{ color: "white" }} />
}
function StarIcon() {
  return <Icon className="fab fa-lastfm" style={{ color: "white" }} />
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
        marginTop: "25vh",
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

export default withStyles(styles)(Resume);
