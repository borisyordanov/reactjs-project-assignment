import React from 'react';
import { useHistory } from 'react-router';
import { useGlobalContext } from '../context';
import { db } from '../firebase';

function CreateRecipe() {
  const history = useHistory();
  const { user } = useGlobalContext();

  const createMeal = (
    meal,
    ingredients,
    prepMethod,
    description,
    foodImageURL,
    category,
    owner
  ) => {
    let ingredientsArray = [...ingredients.split(',')];
    return db.collection('recipes').add({
      meal,
      ingredients: ingredientsArray,
      prepMethod,
      description,
      foodImageURL,
      category,
      owner,
    });
  };

  const onCreateRecipeSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const {
      meal,
      ingredients,
      prepMethod,
      description,
      foodImageURL,
      category,
    } = e.target;
    console.log(user);
    createMeal(
      meal.value,
      ingredients.value,
      prepMethod.value,
      description.value,
      foodImageURL.value,
      category.value,
      user.uid
    )
      .then((res) => history.push('/'))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form
        className="text-center p-5 form-layout"
        id="share-receipt-form"
        onSubmit={onCreateRecipeSubmit}
      >
        <p className="h4 mb-4">Share Recipe</p>

        <input
          type="text"
          id="defaultRecepieShareMeal"
          name="meal"
          className="form-control mb-4"
          placeholder="Meal"
        />

        <input
          type="text"
          id="defaultRecepieShareIngredients"
          name="ingredients"
          className="form-control mb-4"
          placeholder="Ingredients"
        />

        <textarea
          type="text"
          id="defaultRecepieShareMethodOfPreparation"
          name="prepMethod"
          className="form-control mb-4"
          placeholder="Method of preparation"
        ></textarea>

        <textarea
          type="text"
          id="defaultRecepieShareDescription"
          name="description"
          className="form-control mb-4"
          placeholder="Description"
        ></textarea>

        <input
          type="text"
          id="defaultRecepieShareFoodImageURL"
          name="foodImageURL"
          className="form-control mb-4"
          placeholder="Food Image URL..."
        />

        <select name="category">
          {/* <option value="Select category...">Select category...</option> */}
          <option value="Vegetables and legumes/beans">
            Vegetables and legumes/beans
          </option>
          <option value="Fruits">Fruits</option>
          <option value="Grain Food">Grain Food</option>
          <option value="Milk, cheese, eggs and alternatives">
            Milk, cheese, eggs and alternatives
          </option>
          <option value="Lean meats and poultry, fish and alternatives">
            Lean meats and poultry, fish and alternatives
          </option>
        </select>

        <button
          className="btn btn-danger w-25 m-auto my-4 btn-block"
          type="submit"
        >
          Share it
        </button>
      </form>
    </>
  );
}

export default CreateRecipe;
