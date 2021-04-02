import React, { useEffect, useState } from 'react';
import Recipe from '../components/Recipe';
import { db } from '../firebase';

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection('recipes').get();
      setRecipes(
        data.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    };
    fetchData();
  }, [recipes]);

  return (
    <>
      <h1 className="text-center">Our Recipes</h1>
      {recipes.length > 0 ? (
        <div id="sharedRecipes">
          {recipes.map((recipe) => {
            return <Recipe key={recipe.id} {...recipe} />;
          })}
        </div>
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
