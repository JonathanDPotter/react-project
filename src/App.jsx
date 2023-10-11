import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { FilmsPage, HomePage, SingleFilmPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/films/:id" element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
