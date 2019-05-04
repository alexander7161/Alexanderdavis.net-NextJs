import { Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import ReactGA from "react-ga";

const styles = (theme: any) => ({
    root: {
        overflowY: "scroll" as "scroll",
        height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - 72px)`,
    },
});

function recordPageView(page: string) {
    ReactGA.pageview(page);
}
interface ResumeProps {
    location: any;
}
class Resume extends Component<ResumeProps> {
    public componentDidMount() {
        if (this.props.location.pathname === "/resume") {
            recordPageView(this.props.location.pathname);
        } else if (this.props.location.pathname === "/") {
            recordPageView("/");
        }
    }
    public componentDidUpdate(prevProps: ResumeProps) {
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
    public render() {
        return (
            <div
                style={{
                    width: "100%",
                    marginTop: "25vh",
                    textAlign: "center",
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
