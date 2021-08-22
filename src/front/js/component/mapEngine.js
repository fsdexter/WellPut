import React, { useState, useEffect, useContext } from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export default function MyMap(props) {
	const { store, actions } = useContext(Context);

	function Map() {
		return <GoogleMap defaultZoom={16} defaultCenter={props.center} />;
	}

	const MapWrapped = withScriptjs(withGoogleMap(Map));

	return (
		<div style={props.style}>
			<MapWrapped
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${store.key}`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={props.style} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
}

MyMap.propTypes = {
	center: PropTypes.object,
	style: PropTypes.object.isRequired
};
