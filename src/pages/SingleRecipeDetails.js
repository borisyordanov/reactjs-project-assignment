import React from 'react';
import { Link } from 'react-router-dom';

function SingleRecipeDetails() {
  return (
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
            <Link className="btn btn-danger" to="/delete/{{recipe.id}}">
              Archive
            </Link>
            <Link className="btn btn-info" to="/edit/{{recipe.id}}">
              Edit
            </Link>
            <Link className="btn btn-success" to="/like/{{recipe.id}}">
              likesCounter likes
            </Link>
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
  );
}

export default SingleRecipeDetails;
