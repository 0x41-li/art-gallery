import React from "react";
import RedirectingBtn from "../../../components/RedirectingBtn";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import mapMarkerIcon from "../../../assets/icons/map-marker.svg";

const LocationOnAMap = () => {
  const markerIcon = new L.Icon({
    iconUrl: mapMarkerIcon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(66, 88),
  });
  return (
    <section>
      <RedirectingBtn
        switch
        oppositeArrow
        text="BACK TO HOME"
        to="/"
        addToClassName="absolute top-0 left-0 z-[9999] md:left-[39px]"
      />
      <div className="h-[550px] w-full md:h-[600px]">
        <MapContainer
          center={[41.481517165843975, -71.3103603175732]}
          zoom={15}
          scrollWheelZoom={false}
          attributionControl={false}
          zoomControl={false}
          className="h-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            className="saturate-0"
          />
          <Marker
            position={[41.481517165843975, -71.3103603175732]}
            icon={markerIcon}
          ></Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default LocationOnAMap;
