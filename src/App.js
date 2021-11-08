import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./pages/tv-shows/TvShows";
import TvShow from "./pages/tv-show/TvShow";
import PageOne from "./pages/pageone/PageOne";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageOne />} />
        </Routes>
        <Routes>
          <Route path="tv-shows/avengers" element={<TvShows />} />
        </Routes>

        <Routes>
          <Route path="tv-shows/details/:id" element={<TvShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
