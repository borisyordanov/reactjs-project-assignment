import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useGlobalContext } from '../context';
import { db } from '../firebase';

function SingleRecipeDetails() {
  let { id } = useParams();
  const { user } = useGlobalContext();
  let [recipe, setRecipe] = useState({});

  const getOne = (id) => {
    return db.collection('recipes').doc(id).get();
  };

  const like = (recipeId, likes) => {
    return db
      .collection('recipes')
      .doc(recipeId)
      .update({ likesCounter: likes });
  };

  useEffect(() => {
    getOne(id)
      .then((res) => setRecipe({ ...res.data() }))
      .catch((err) => console.log(err));
  }, [id]);

  const {
    meal,
    ingredients,
    prepMethod,
    description,
    foodImageURL,
    category,
    owner,
    likesCounter,
  } = recipe;

  const onRecipeButtonClickHandler = () => {
    let incrementedLikes = Number(likesCounter) + 1;
    like(id, incrementedLikes).then(() => {
      setRecipe((oldState) => ({
        ...oldState,
        likesCounter: incrementedLikes,
      }));
    });
  };

  return (
    <div className="row form-layout p-5">
      <div className="col-md-12">
        <div className="recepieInfo">
          <div className="detailsFoodImage">
            <img src={foodImageURL} alt={meal} />
          </div>

          <div className="infoPack">
            <h3 className="my-3">{meal}</h3>
            <p className="prep-method">{prepMethod}</p>
            <p className="description">{description}</p>
          </div>
          <div className="actions">
            {owner === user?.uid ? (
              <>
                <Link className="btn btn-danger" to="/recipe/delete/:id">
                  Archive
                </Link>
                <Link className="btn btn-info" to="/recipe/edit/:id">
                  Edit
                </Link>
              </>
            ) : (
              <Link
                className="btn btn-success"
                to={`/recipe/details/${id}`}
                onClick={onRecipeButtonClickHandler}
              >
                {likesCounter} likes
              </Link>
            )}
          </div>
        </div>

        <div className="detailsIngredients">
          <h3 className="my-3 ingredient">Ingredients</h3>
          <ul>
            {ingredients?.map((item, index) => {
              return <li key={index}>{item}</li>; //TODO FIX KEYS
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SingleRecipeDetails;
