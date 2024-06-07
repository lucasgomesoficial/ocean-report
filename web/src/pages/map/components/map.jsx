import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import mapPin from "../../../assets/images/pin.svg";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import { MinimapControl } from "./mini-mapa-control";
import "./styles.css";
import { useFetchReports } from "../hook/useFetch";

const mapPinIcon = Leaflet.icon({
  iconUrl: mapPin,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const zoom = 3;
const location = [-47.890812, -15.795598];

export function ShowMap({ position, reports, state, address }) {
  const [text, setText] = React.useState("");

  const { sendReportByState } = useFetchReports();

  const handleChangeSelect = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    let reports = JSON.parse(localStorage.getItem("reports") || "[]");

    reports.push({
      position,
      address,
      text: event.target[0].defaultValue,
    });

    localStorage.setItem("reports", JSON.stringify(reports));
    await sendReportByState(state);
    setText("");
  }
  return (
    <MapContainer
      center={position || location}
      zoom={zoom}
      className="map-container"
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${
          import.meta.env.VITE_ACCESS_TOKEN_MAP_BOX
        }`}
      />

      <MinimapControl position="topright" />

      {position && (
        <Marker icon={mapPinIcon} position={position}>
          <Popup closeButton={false} minWidth={240} maxWidth={240}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <Textarea
                placeholder="Relate o ocorrido"
                onChange={handleChangeSelect}
                value={text}
              />
              <Button type="submit">Enviar</Button>
            </form>
          </Popup>
        </Marker>
      )}

      {reports.length > 0 &&
        reports.map((report) => (
          <Marker
            key={report.text}
            icon={mapPinIcon}
            position={report.position}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240}>
              <div>
                <h3>{report.address}</h3>
                <p>{report.text}</p>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}
