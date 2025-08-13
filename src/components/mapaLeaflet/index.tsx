"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import styles from "./styles.module.scss";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/";

const customMarkerIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

const MapaLeaflet = () => {
  const position: LatLngExpression = [-8.013999803342601, -34.85907816193948];

  return (
    <MapContainer
      center={position}
      zoom={20}
      scrollWheelZoom={false}
      className={styles.mapa}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customMarkerIcon}>
        <Popup>Grupo Du Car</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapaLeaflet;
