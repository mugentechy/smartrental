import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Icon } from 'leaflet';

// Set custom marker icons
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

// Kenya's bounding box coordinates for restricting the map view
const bounds = [
  [-5.0, 34.0], // Southwest coordinates
  [5.0, 42.0]   // Northeast coordinates
];

function SetBounds({ bounds }) {
  const map = useMap();
  map.fitBounds(bounds);
  return null;
}

function Map({ center }) {
  return (
    <div className="relative">
      <MapContainer
        center={center ?? [0, 38]} // Center of Kenya
        zoom={6} // Adjust zoom level as needed
        scrollWheelZoom={false}
        className="h-[35vh] w-full rounded-lg"
      >
        <TileLayer url={url} attribution={attribution} />
        {center && <Marker position={center} />}
        <SetBounds bounds={bounds} />
      </MapContainer>
    </div>
  );
}

export default Map;
