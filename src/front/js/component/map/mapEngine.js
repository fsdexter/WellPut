import React, { useState, useEffect, useContext } from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { Context } from "../../store/appContext";

function Map() {
	return <GoogleMap defaultZoom={16} defaultCenter={{ lat: props.lat, lng: props.lng }} />;
}
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MyMap() {
	const { store, actions } = useContext(Context);
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<MapWrapped
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
					store.key
				}`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `250px`, width: `350px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
}
