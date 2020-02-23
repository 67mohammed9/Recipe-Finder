import React, { useState, useEffect, } from 'react';
import Recipe from './Recipe'
import './App.css';
require('dotenv').config();


const App = () => {
   const app_id = process.env.REACT_APP_ID;
   const app_key= process.env.REACT_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('pasta');

  /*`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}` */


  useEffect(() => {
    const getRecipies = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`)
      const data = await response.json();//use the data for code
      setRecipes(data.hits);
      console.log(data.hits);
    }
    getRecipies();
  }, [query]);



  
  const getSearch = e => {
    setSearch(e.target.value);
  }

  const getQuery = e => {
    e.preventDefault();
    setQuery(search);
  }



  return (
    <div  className="App">
      <div>
        <h1 className="title">
        Recipe Finder
      </h1>
      </div>
      <form /*style={{minHeight:"8vh", textAlign: "center",display:"flex",justifyContent: "center"}}*/  className="searchForm"
             onSubmit={getQuery}>
        <input
          style={{ width: "50%",
                   border: "none",
                   padding: "10px",
                   alignItems:"flex-end" }}
          className="search-bar"
          placeholder="search recipes"
          type="text"
          onChange={getSearch} />
        <button  /*style={{ background:"darkgoldenrod",border: "none", padding: "10px 20px", color: "white"}} */
            className="search-button" type="submit">
          Search
          </button>
      </form>
      <div /*style={{ display:"flex",justifyContent: "space-around", flexWrap:"wrap"}}*/ className="recipies">
        {
          recipes.length===0?<h1>Sorry no results found</h1>: recipes.map((recipe, i) => (
            <Recipe
              key={i}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              picture={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          )
          )
        }
      </div>
    </div>
  );
}

export default App;
