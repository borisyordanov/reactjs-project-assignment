import { useEffect, useState } from "react";
import { getAllRecipes } from "../services/get-all-recipes";

export const useGetRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!recipes.length) {
      const fetchRecipes = async () => {
        setLoading(true);

        const data = await getAllRecipes();

        setLoading(false);

        setRecipes(
          data.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      };
      fetchRecipes();
    }
  }, [recipes]);

  return [loading, recipes];
};
