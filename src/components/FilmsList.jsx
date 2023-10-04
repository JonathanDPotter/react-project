import React, { Component } from "react";

class FilmsList extends Component {
  constructor() {
    super();
    this.state = { list: [], loading: false };
    this.getFilms = this.getFilms.bind(this);
  }

  componentDidMount() {
    this.getFilms();
  }

  getFilms() {
    this.setState({ loading: true });
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ list: json });
        this.setState({ loading: false });
      })
      .catch((error) => console.log(error.message));
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <li>loading...</li>
        ) : (
          this.state.list.map((film) => <li key={film.id}>{film.title}</li>)
        )}
      </>
    );
  }
}

export default FilmsList;
