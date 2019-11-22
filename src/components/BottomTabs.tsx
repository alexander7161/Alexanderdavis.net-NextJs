import { Tab, Tabs, withStyles } from "@material-ui/core";
import { List as ListIcon, Person as PersonIcon } from "@material-ui/icons";
import React from "react";
import { withRouter } from "react-router";

const styles = {
	root: {
		width: "100%",
		position: "fixed" as "fixed",
		bottom: 0,
		borderTop: "0.5px solid lightgray",
		zIndex: 1100,
		backgroundColor: "white",
	},
	tabsIndicator: {
		top: 0,
	},
};

interface BottomTabsProps {
	location: any;
	history: any;
	classes: any;
	match: any;
}

class BottomTabs extends React.Component<BottomTabsProps, { value: number }> {
	constructor(props: BottomTabsProps) {
		super(props);
		this.state = { value: this.getValue(props.location.pathname) };
	}

	public getValue(pathname: string) {
		switch (pathname) {
			case "/resume":
				return 1;
			case "/":
			default:
				return 0;
		}
	}

	public componentDidUpdate(prevProps: BottomTabsProps) {
		if (prevProps.location.pathname !== this.props.location.pathname) {
			const value = this.getValue(this.props.location.pathname);
			this.setState({ value });
		}
	}

	public handleChange = (event: any, value: number) => {
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
	}

	public render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<div className={classes.root}>
				<Tabs
					indicatorColor="secondary"
					textColor="secondary"
					centered={true}
					variant="fullWidth"
					value={value}
					onChange={this.handleChange}
					classes={{ indicator: classes.tabsIndicator }}
				>
					<Tab className="btn" label="Projects" icon={<ListIcon />} />
					<Tab className="btn" label="Résumé" icon={<PersonIcon />} />
				</Tabs>
			</div>
		);
	}
}
export default withRouter(withStyles(styles)(BottomTabs));
