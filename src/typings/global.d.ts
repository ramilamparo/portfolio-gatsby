declare module "*.png" {
	const value: string;
	export default value;
}

declare namespace JSX {
	interface IntrinsicElements {
		"ion-icon": any;
	}
}
