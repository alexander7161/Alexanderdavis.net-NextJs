/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "react-swipeable-routes" {
	export = Index;
	declare class Index extends React.Component<PropsType, any> {
		constructor(...args: any[]);
		public componentDidMount(): void;
		public componentDidUpdate(prevProps: any): void;
		public componentWillUnmount(): void;
		public forceUpdate(callback: any): void;
		public render(): any;
		public setState(partialState: any, callback: any): void;
	}
	declare namespace Index {
		namespace contextTypes {
			function router(
				p0: any,
				p1: any,
				p2: any,
				p3: any,
				p4: any,
				p5: any
			): any;
		}
	}
}
