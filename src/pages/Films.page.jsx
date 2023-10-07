import React, { useEffect, useState } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";

const FilmsPage = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  const getFilms = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://studioghibliapi-d6fc8.web.app/films"
      );
      const data = await response.json();
      setList(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  const filmsByDirector = filterFilmsByDirector(list, searchDirector);

  const directors = getListOf(list, "director");

  console.log(directors);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form method="submit">
        <div className="form-group">
          <label htmlFor="director">Search Director</label>
          <select
            value={searchDirector}
            onChange={(e) => setSearchDirector(e.target.value)}
          >
            <option value="">All</option>
            {directors.map((director) => (
              <option value={director} key={director}>{director}</option>
            ))}
          </select>
        </div>
      </form>
      {loading ? (
        <li>loading films...</li>
      ) : (
        <ul>
          {filmsByDirector.map((film) => (
            <li key={film.id}>{film.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilmsPage;
