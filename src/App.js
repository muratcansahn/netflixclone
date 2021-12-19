import "./App.css";

import Row from "./components/Row/Row";
import requests from "./request";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"TRENDING NOW "} fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
