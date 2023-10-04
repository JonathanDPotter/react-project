import { Component } from "react";
import FilmsList from "./components/FilmsList";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ list: [...this.state.list, this.state.text] });
  }

  render() {
    return (
      <div className="main">
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            onChange={(event) => this.setState({ text: event.target.value })}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          <FilmsList />
        </ul>
      </div>
    );
  }
}

export default App;
