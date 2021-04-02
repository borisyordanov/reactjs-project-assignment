import { db } from "../firebase";

export const getAllRecipes = () => {
  try {
    const { docs } = db.collection("recipes").get();

    if (!docs) {
      return [];
    }

    return docs.map((recipe) => ({
      id: recipe.id,
      ...recipe.data(),
    }));
  } catch (error) {
    return;
  }
};
