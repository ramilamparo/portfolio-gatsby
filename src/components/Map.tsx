import React, { useEffect, useState } from "react";
import {
	Map as LeafletMap,
	Marker,
	Popup,
	TileLayer,
	Viewport,
	MapProps as LeafletMapProps
} from "react-leaflet";
import styled from "styled-components";
import { gray5 } from "../utils/colors";

export interface MapProps {
	location: {
		lat: number;
		lng: number;
	};
}

const StyledMap = styled((props: LeafletMapProps) => <LeafletMap {...props} />)`
	height: 100%;
	width: 100%;
	background: ${gray5};
`;

export const Map = ({ location }: MapProps) => {
	const [viewport, setViewport] = useState<Viewport | undefined>();
	useEffect(() => {
		setViewport({
			center: [location.lat, location.lng],
			zoom: 6
		});
	}, [location]);

	return (
		<StyledMap viewport={viewport}>
			<TileLayer
				url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
				attribution={`&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`}
			/>
			<Marker position={[location.lat, location.lng]}>
				<Popup>
					A pretty CSS3 popup.
					<br />
					Easily customizable.
				</Popup>
			</Marker>
		</StyledMap>
	);
};
