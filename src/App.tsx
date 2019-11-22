// tslint:disable-next-line: no-submodule-imports
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faAndroid,
	faChrome,
	faGithub,
	faJava,
	faLastfm,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React, { Component } from "react";
import ReactGA from "react-ga";
import { connect, DispatchProp } from "react-redux";
import { Route, RouteComponentProps, withRouter } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import AppBar from "./components/AppBar";
import BottomTabs from "./components/BottomTabs";
import Projects from "./pages/projects";
import { updateGithubUpdated } from "./pages/projects/store/actions";
import Resume from "./pages/Resume";

library.add(faLinkedin, faLastfm, faGithub, faJava, faAndroid, faChrome);

type AppProps = DispatchProp<any> & RouteComponentProps;
class App extends Component<AppProps, { index: number; set: boolean }> {
	constructor(props: AppProps) {
		super(props);
		this.state = { index: 0, set: false };
		this.onChangeIndex = this.onChangeIndex.bind(this);
	}

	public componentDidMount() {
		this.props.dispatch(updateGithubUpdated());
		if (this.props.location.pathname === "/") {
			this.recordPageView("/");
		}
	}

	public onChangeIndex(index: number): void {
		if (!(index === 0 && this.state.index === 0)) {
			this.setState({ index, set: true });
			if (index === 0) {
				this.recordPageView("/");
			} else {
				this.recordPageView("/resume");
			}
		}
	}

	public recordPageView(page: string) {
		ReactGA.pageview(page);
	}

	public render() {
		return (
			<React.Fragment>
				<AppBar />
				<SwipeableRoutes
					onChangeIndex={this.onChangeIndex}
					style={{
						WebkitOverflowScrolling: "touch", // iOS momentum scrolling
						paddingBottom: "70px",
					}}
				>
					<Route path="/" component={Projects} />
					<Route exact={true} path="/resume" component={Resume} />
				</SwipeableRoutes>
				<BottomTabs />
			</React.Fragment>
		);
	}
}

export default withRouter(connect()(App));
