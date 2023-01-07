import { useCurrentLocation } from "./components/useCurrentLocation";

export const App = () => {

  let { location } = useCurrentLocation();
  let {latitude, longitude} = location;

  let url = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;

  return (
    <div>
      <h1>Coordinates</h1>
      <ul>
        <li><strong>Latitude</strong>: {location.latitude}</li>
        <li><strong>Longitude</strong>: {location.longitude}</li>
      </ul>
      <h2>Verify with OpenStreetsMap</h2>
      <a href={url} target='_blank' rel="noreferrer">See map!</a>
    </div>
  );
}

export default App;
