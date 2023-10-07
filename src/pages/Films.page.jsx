import React, { useEffect, useState } from "react";
import {
  filterFilmsByDirector,
  getFilms,
  getListOf,
  getFilmStats,
} from "../helpers/film.helpers";
import { Link } from "react-router-dom";
import "./Films.page.css";

const FilmsPage = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  // moved getFilms to helpers in order to use it to fetch single films as well and keep things DRY

  const loadFilms = async () => {
    setLoading(true);
    setList(await getFilms());
    setLoading(false);
  };

  useEffect(() => {
    loadFilms();
  }, []);

  const filteredFilms = filterFilmsByDirector(list, searchDirector);
  const { total, avg_score, latest } = getFilmStats(filteredFilms);
  const directors = getListOf(list, "director");

  return (
    <div className="films-page">
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
              <option value={director} key={director}>
                {director}
              </option>
            ))}
          </select>
        </div>
      </form>
      {loading ? (
        <li>loading films...</li>
      ) : (
        <>
          <ul>
            {filteredFilms &&
              filteredFilms.map((film) => (
                <li key={film.id}>
                  <Link to={`/film/${film.id}`}>{film.title}</Link>
                </li>
              ))}
          </ul>
          {total && (
            <div className="film-stats">
              <div>
                <span># Of Films:</span>
                <span>{total}</span>
              </div>
              <div>
                <span>Average Rating:</span>
                <span>{avg_score.toFixed(2)}</span>
              </div>
              <div>
                <span>Latest Film:</span>
                <span>{latest}</span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FilmsPage;
