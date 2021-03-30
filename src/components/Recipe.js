import React from 'react';

function Recipe() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="our-team-main">
              <div class="team-front">
                <img src="{{this.categoryImageURL}}" />
                <h3>meal</h3>
                <p>category</p>
              </div>

              <div class="team-back">
                <div class="back-side-info">
                  <h4>Ingredients</h4>
                  <ul>
                    each ingredients
                    <li>ingredient</li>
                  </ul>
                  <a href="/details/{{id}}">View the recipe</a>
                </div>

                <img class="foodImage" src="{{this.foodImageURL}}" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe;
