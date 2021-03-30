import React from 'react';

function SingleRecipe() {
  return (
    <>
      <div className="row form-layout p-5">
        <div className="col-md-12">
          <div className="recepieInfo">
            <div className="detailsFoodImage">
              <img src="{{recipe.foodImageURL}}" alt="" />
            </div>

            <div className="infoPack">
              <h3 className="my-3">meal</h3>
              <p className="prep-method">prepMethod</p>
              <p className="description">description</p>
            </div>
            <div className="actions">
              <a className="btn btn-danger" href="/delete/{{recipe.id}}">
                Archive
              </a>
              <a className="btn btn-info" href="/edit/{{recipe.id}}">
                Edit
              </a>
              <a className="btn btn-success" href="/like/{{recipe.id}}">
                {' '}
                likesCounter likes
              </a>
            </div>
          </div>

          <div className="detailsIngredients">
            <h3 className="my-3 ingredient">Ingredients</h3>
            <ul>
              <li>ingredients</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleRecipe;
