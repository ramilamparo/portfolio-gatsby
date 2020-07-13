import React, { Component } from "react";
import styled from "styled-components";
import classNames from "classnames";

import { rockItLeft, rockItRight } from "../../utils/animations";

const Rocker = styled.div`
	&.left {
		animation: ${rockItLeft} 0.5s ease forwards;
	}
	&.right {
		animation: ${rockItRight} 0.5s ease forwards;
	}
`;

export interface RockOnHoverProps {
	className?: string;
}

interface RockOnHoverState {
	rock: boolean;
	direction: "right" | "left";
}

export class RockOnHover extends Component<RockOnHoverProps, RockOnHoverState> {
	constructor(props: RockOnHoverProps) {
		super(props);
		this.state = {
			rock: false,
			direction: "right"
		};
	}

	public turnOnRock = () => {
		let nextDirection = this.toggleRockDirection();
		this.setState({
			rock: true,
			direction: nextDirection
		});
	};

	public turnOffRock = () => {
		this.setState({
			rock: false
		});
	};

	public toggleRockDirection = (): RockOnHoverState["direction"] => {
		return this.state.direction === "right" ? "left" : "right";
	};
	handleEndAnimation = () => {
		let nextDirection = this.state.direction;
		if (this.state.rock) {
			nextDirection = this.toggleRockDirection();
		}
		this.setState({
			direction: nextDirection
		});
	};
	render() {
		const { className, children } = this.props;
		const rockDirection = this.state.direction;
		return (
			<Rocker
				onPointerEnter={this.turnOnRock}
				onPointerLeave={this.turnOffRock}
				onAnimationEnd={this.handleEndAnimation}
				className={classNames(className, rockDirection)}
			>
				{children}
			</Rocker>
		);
	}
}
