import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

function Recipe({ id, meal, ingredients, foodImageURL, category }) {
  const { user } = useGlobalContext();

  function getCategoryImageUrl(category) {
    const result = {
      'Vegetables and legumes/beans':
        'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549__340.jpg',
      Fruits:
        'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg',
      'Grain Food':
        'https://media1.s-nbcnews.com/i/newscms/2020_22/1574082/whole-grain-bread-te-main2-200528_31a85b6147d40ed7a4484342d81abb90.jpg',
      'Milk, cheese, eggs and alternatives':
        'https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg',
      'Lean meats and poultry, fish and alternatives':
        'https://t3.ftcdn.net/jpg/01/18/84/52/240_F_118845283_n9uWnb81tg8cG7Rf9y3McWT1DT1ZKTDx.jpg',
    };
    return result[category];
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="our-team-main">
            <div className="team-front">
              <img src={getCategoryImageUrl(category)} alt={category} />
              <h3>{meal}</h3>
              <p>{category}</p>
            </div>

            <div className="team-back">
              <div className="back-side-info">
                <h4>Ingredients</h4>
                <ul>
                  {ingredients.map((item, index) => {
                    return <li key={index}>{item}</li>; //TO FIX KEY
                  })}
                </ul>
                {user ? (
                  <Link to={`/recipe/details/${id}`}>View the recipe</Link>
                ) : (
                  <Link to={`/login`}>Login to see the details</Link>
                )}
              </div>

              <img className="foodImage" src={foodImageURL} alt={meal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
