import { db } from "../firebase";

export const getAllRecipes = () => db.collection("recipes").get();
