import React, { Component } from "react";
import ReactGA from "react-ga";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
	root: {
		overflowY: "scroll",
		height: `calc(100vh - ${theme.mixins.toolbar["minHeight"]}px - 72px)`
	}
});

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
