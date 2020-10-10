/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "enzyme-adapter-react-16" {
	export = Index;
	declare class Index {
		public static MODES: {
			MOUNT: string;
			SHALLOW: string;
			STRING: string;
		};
		public createElement(...args: any[]): any;
		public createMountRenderer(options: any): any;
		public createRenderer(options: any): any;
		public createShallowRenderer(): any;
		public createStringRenderer(options: any): any;
		public displayNameOfNode(node: any): any;
		public elementToNode(element: any): any;
		public getProviderFromConsumer(Consumer: any): any;
		public invokeSetStateCallback(instance: any, callback: any): void;
		public isContextConsumer(type: any): any;
		public isCustomComponent(type: any): any;
		public isCustomComponentElement(inst: any): any;
		public isFragment(fragment: any): any;
		public isValidElement(element: any): any;
		public isValidElementType(object: any): any;
		public nodeToElement(node: any): any;
		public nodeToHostNode(node: any, ...args: any[]): any;
		public wrap(element: any): any;
		public wrapWithWrappingComponent(node: any, options: any): any;
	}
}
