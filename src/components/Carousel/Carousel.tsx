import React, { ReactElement } from "react";
import { CarouselItemProps, CarouselItem } from "./CarouselItem";

export interface CarouselProps {
	items: CarouselItemProps[];
}

export const Carousel = ({ items }: CarouselProps): ReactElement => {
	return (
		<div>
			{items.map((item) => (
				<CarouselItem key={item.title} {...item} />
			))}
		</div>
	);
};
