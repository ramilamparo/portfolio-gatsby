import { Component } from "react";
import ReactDOM from "react-dom";

/**
 * Appends children to the end of the html body.
 */
export class BodyPortal extends Component {
	private el: HTMLDivElement;
	constructor(props: {}) {
		super(props);
		this.el = document.createElement("div");
		this.el.style.display = "contents";
	}
	componentDidMount() {
		document.body.appendChild(this.el);
	}
	componentWillUnmount() {
		document.body.removeChild(this.el);
	}

	render() {
		return ReactDOM.createPortal(this.props.children, this.el);
	}
}
