import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import React, { useState, useRef, useContext, useCallback } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const MAPBOX_TOKEN =
	"pk.eyJ1IjoiZ2FicmllbC1iZWxtb250ZSIsImEiOiJja3VsNWpsbzExams0MndteWFtaXFyYTNuIn0.cwdMajhwGbPnMX88npC9NA";

export default function MapBox({ height, isGeolocation }) {
	const { actions } = useContext(Context);

	const mapRef = useRef();

	const [viewport, setViewport] = useState({
		latitude: 40.41,
		longitude: -3.7,
		zoom: 9
	});

	const handleViewportChange = useCallback(newViewport => setViewport(newViewport), []);

	const handleResult = ({ result }) => {
		if (!result) return;
		const city = result.text_es;
		actions.setCity(city);
	};

	return (
		<div style={{ height: `${height}px` }}>
			<MapGL
				ref={mapRef}
				{...viewport}
				width="100%"
				height="100%"
				mapStyle="mapbox://styles/mapbox/streets-v11"
				onViewportChange={handleViewportChange}
				mapboxApiAccessToken={MAPBOX_TOKEN}>
				{isGeolocation && (
					<Geocoder
						mapRef={mapRef}
						onViewportChange={handleViewportChange}
						mapboxApiAccessToken={MAPBOX_TOKEN}
						placeholder="Search city..."
						position="top-left"
						countries="es"
						language="es"
						onResult={handleResult}
					/>
				)}
			</MapGL>
		</div>
	);
}

MapBox.propTypes = {
	height: PropTypes.number,
	isGeolocation: PropTypes.bool
};

MapBox.defaultProps = {
	height: 250,
	isGeolocation: true
};
