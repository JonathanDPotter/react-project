import React, { useEffect, useState } from "react";

const FilmsList = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

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

  return (
    <>
      {loading ? (
        <li>loading films...</li>
      ) : (
        <ul>
          {list.map((film) => (
            <li key={film.id}>{film.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FilmsList;
