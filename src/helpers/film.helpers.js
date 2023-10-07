export const filterFilmsByDirector = (list, director) => {
  return director === ""
    ? list
    : list.filter((film) => film.director === director);
};

export const getListOf = (list, parameter) => {
  return Array.from(new Set(list.map((item) => item[parameter])));
};

export const getFilms = async (id) => {
  try {
    const response = await fetch(
      `https://studioghibliapi-d6fc8.web.app/films${id ? "/" + id : ""}`
    );
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const getFilmStats = (list) => {
  const acc_score = list.reduce((acc, curr) => acc + parseInt(curr.rt_score), 0);
  const total = list.length;

  return {
    acc_score,
    total,
    avg_score: acc_score/total, 
    latest: Math.max(...list.map((listItem) => listItem.release_date)),
  };
};
