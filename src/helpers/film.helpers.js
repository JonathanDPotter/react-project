export const filterFilmsByDirector = (list, director) => {
  return director === ""
    ? list
    : list.filter((film) => film.director === director);
};

export const getListOf = (list, parameter) => {
  return Array.from(new Set(list.map((item) => item[parameter])));
};
