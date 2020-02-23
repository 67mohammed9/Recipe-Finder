import React from "react"
import style from './recipe.module.css'
const Recipe =({title,calories,picture,ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1>
                {title}
            </h1>
            <p>
               Calories: {Math.round(calories)}
            </p>
            <ol>
                 {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={picture} alt=""/>
        </div>
    );
};

export default Recipe