import React from 'react';

function Home() {
  return (
    <>
      <h1 className="text-center">Our Recipes</h1>

      <div id="sharedRecipes"></div>
      <div id="foodNotFound">
        <img src="https://t4.ftcdn.net/jpg/00/62/17/31/240_F_62173114_ozantkVtkPgzL0fxssAkTqKX1FHPr0UW.jpg" />
        <h3>Food not found...</h3>
      </div>

      <main role="main" className="inner cover mt-5">
        <h1 className="cover-heading">Coooooking University</h1>
        <p className="lead">
          They say that food passes through the stomach, we say that food passes
          through CookUni...
        </p>
      </main>
    </>
  );
}

export default Home;
