import { useEffect, useState } from "react";
import { getAllRecipes } from "../services/get-all-recipes";

export const useGetRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);

      try {
        const { docs: recipes } = await getAllRecipes();

        setLoading(false);

        setRecipes(
          recipes.map((recipe) => ({
            id: recipe.id,
            ...recipe.data(),
          }))
        );
      } catch (error) {
        setLoading(false);
        setError("Unable to load recipes");
      }
    };
    fetchRecipes();
  }, []);

  return [loading, error, recipes];
};
