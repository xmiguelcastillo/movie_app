import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Movie from "./routes/Movie";

function App() {
  return (
    <div className="overflow-x-auto p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
