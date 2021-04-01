import React from 'react';
import { useStateValue } from '../context';

function Home() {
  const [{ recipes }] = useStateValue();
  return (
    <>
      <h1 className="text-center">Our Recipes</h1>
      {recipes.length > 0 ? (
        <div id="sharedRecipes">{/*  Recipe.js.map */}</div>
      ) : (
        <div id="foodNotFound">
          <img
            src="https://t4.ftcdn.net/jpg/00/62/17/31/240_F_62173114_ozantkVtkPgzL0fxssAkTqKX1FHPr0UW.jpg"
            alt="No Recipes"
          />
          <h3>Food not found...</h3>
        </div>
      )}
      <main role="main" className="inner cover mt-5">
        <h1 className="cover-heading">The Cook Book</h1>
        <p className="lead">
          They say that food passes through the stomach, we say that food passes
          through The Cook Book...
        </p>
      </main>
    </>
  );
}

export default Home;
