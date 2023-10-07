import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilms } from "../helpers/film.helpers";

const SingleFilmPage = () => {
  const [item, setItem] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  // moved getFilms to film.helpers and made it usable to get all films or a single film to keep things DRY

  const loadFilm = async () => {
    setLoading(true);
    setItem(await getFilms(id));
    setLoading(false);
  };

  useEffect(() => {
    loadFilm();
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <div>
        <img src={`${item.image}`} alt={`${item.title} Poster`} />
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>
          Directed by {item.director}. Produced by {item.producer}.
        </p>
        <p>
          The film was released in <strong>{item.release_date}</strong> and
          garnered a <strong>{item.rt_score}</strong> aggregate score on{" "}
          <a
            href="https://www.rottentomatoes.com/"
            target="_blank"
            rel="noreferrer"
          >
            Rotten Tomatoes
          </a>
          .
        </p>
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
export default SingleFilmPage;
