import FilmsList from "./components/FilmsList";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setList((prev) => [...prev, text]);
    setText("");
  };

  return (
    <div className="main">
      <h1>Hello World</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((listItem, i) => (
          <li key={i}>{listItem}</li>
        ))}
      </ul>
      <FilmsList />
    </div>
  );
};

export default App;
