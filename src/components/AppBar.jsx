import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router";
import IconButton from "@material-ui/core/IconButton";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
	root: {
		flexGrow: 1,
		top: 0,
		left: 0,
		right: 0,
		width: "100%"
	}
});

export default withRouter(
	withStyles(styles)(({ classes, location }) => {
		// useEffect(() => {
		// 	loadCSS(
		// 		"https://use.fontawesome.com/releases/v5.6.3/css/all.css",
		// 		document.querySelector("#insertion-point-jss")
		// 	);
		// });
		return (
			<AppBar position="sticky" className={classes.root}>
				<Toolbar>
					<Typography
						variant="title"
						color="inherit"
						style={{ color: "white" }}
					>
						{location.pathname === "/resume" ? "Resume" : "Projects"}
					</Typography>
					<div style={{ right: 16, left: "auto", position: "absolute" }}>
						<a
							href="https://www.linkedin.com/in/alexander-l-davis/"
							title="LinkedIn - Alexander7161"
							style={{ textDecoration: "none" }}
						>
							<IconButton color="inherit">
								<Icon className="fab fa-linkedin" style={{ color: "white" }} />
							</IconButton>
						</a>
						<a
							href="https://github.com/alexander7161"
							title="GitHub - Alexander7161"
							style={{ textDecoration: "none" }}
						>
							<IconButton color="inherit">
								<Icon className="fab fa-github" style={{ color: "white" }} />
							</IconButton>
						</a>
						<a
							href="https://www.last.fm/user/alexander7161"
							title="LastFm - Alexander7161"
							style={{ textDecoration: "none" }}
						>
							<IconButton color="inherit">
								<Icon className="fab fa-lastfm" style={{ color: "white" }} />
							</IconButton>
						</a>
					</div>
				</Toolbar>
			</AppBar>
		);
	})
);
