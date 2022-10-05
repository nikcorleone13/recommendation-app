import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const genres = {
  Thriller:[
    {"name": "Se7en", "rating": "9/10"},
    {"name": "Memories of Murder", "rating": "9/10"},
    {"name": "Goodfellas", "rating": "8.8/10"},
    {"name": "Godfather II", "rating": "8.7/10"},
    {"name": "Prisoners", "rating": "8/10"}
  ],
  Feels: [
    { name: "Pursuit of Happyness", rating: "9.3/10" },
    { name: "Forest Gump", rating: "8.8/10" },
    { name: "Spirited Away", rating: "8.5/10" }
  ],
  Drama: [
    { name: "Birdman", rating: "9.5/10" },
    { name: "The Portrait of a Lady on Fire", rating: "8.8/10" },
    { name: "Marriage Story", rating: "8/10" }
  ]
};

function App() {

  const [selectedCategoryItem, setCategoryItem] = useState("Thriller");
  const genresArray = Object.keys(genres);
  function categoryClickHandler(genresCategory) {
    setCategoryItem(genresCategory);
  }
  
return (
    <div className="App">
    <h1 style={{ padding: "5px", margin: "1rem", backgroundColor: "red"}}>Movies 🎥</h1>
      <h4>Select a category to view recommendations</h4>
      {genresArray.map((genres) => {
        return (
          <button style={{ padding: "5px", margin: "1rem"}} key={genres} onClick={() => categoryClickHandler(genres)}> {genres}
          </button>
        );
      })}
      <ul>
        {genres[selectedCategoryItem].map((movie) => (
          <div style={{ padding:"1rem", border: "1px solid black", width: "400px",
                        margin:"2rem auto" }}>
          <li id="listItem" key={movie.name} style={{ listStyleType: "none"}}>
            <div id="name">Name: {movie.name}</div>{" "}
            <div id="rating">Rating: {movie.rating}</div>
          </li>
        </div>
        ))}
      </ul>
  </div>
  );
}

export default App;
