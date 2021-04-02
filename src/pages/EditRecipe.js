import React from 'react';

function EditRecipe() {
  return (
    <>
      <form className="text-center p-5 form-layout" id="edit-receipt-form">
        <p className="h4 mb-4">Edit Recipe</p>

        <input
          type="text"
          id="defaultRecepieEditMeal"
          name="meal"
          className="form-control mb-4"
          placeholder="Meal"
          value="{{recipe.meal}}"
        />

        <input
          type="text"
          id="defaultRecepieEditIngredients"
          name="ingredients"
          className="form-control mb-4"
          placeholder="Ingredients"
          value="{{recipe.ingredients}}"
        />

        <textarea
          type="text"
          id="defaultRecepieEditMethodOfPreparation"
          name="prepMethod"
          className="form-control mb-4"
          placeholder="Method of preparation"
        >
          prepMethod
        </textarea>

        <textarea
          type="text"
          id="defaultRecepieEditDescription"
          name="description"
          className="form-control mb-4"
          placeholder="Description"
        >
          description
        </textarea>

        <input
          type="text"
          id="defaultRecepieEditFoodImageURL"
          name="foodImageURL"
          className="form-control mb-4"
          placeholder="Food Image URL..."
          value="{{recipe.foodImageURL}}"
        />

        <select name="category" select="">
          <option>Vegetables and legumes/beans</option>
          <option>Fruits</option>
          <option>Grain Food</option>
          <option>Milk, cheese, eggs and alternatives</option>
          <option>Lean meats and poultry, fish and alternatives</option>
        </select>
        <button
          className="btn btn-danger w-25 m-auto my-4 btn-block"
          type="submit"
        >
          Edit it
        </button>
      </form>
    </>
  );
}

export default EditRecipe;
