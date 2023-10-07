import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { FilmsPage, HomePage, SingleFilmPage } from "./pages";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/film/:id" element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
