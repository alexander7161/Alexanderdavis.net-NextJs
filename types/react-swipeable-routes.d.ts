export = index;
declare class index {
	constructor(...args: any[]);
	componentDidMount(): void;
	componentDidUpdate(prevProps: any): void;
	componentWillUnmount(): void;
	forceUpdate(callback: any): void;
	render(): any;
	setState(partialState: any, callback: any): void;
}
declare namespace index {
	namespace contextTypes {
		function router(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
	}
}
