import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import { auth, db } from './firebase';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = async () => {
    setLoading(true);
    try {
      const data = await db.collection('recipes').get();
      // const data = await response.json();
      console.log(data);
      if (data) {
        setRecipes(data);
      } else {
        setRecipes([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //ONLY user in global context?

  useEffect(() => {
    getAllRecipes();
  }, [getAllRecipes]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        setUser(authUser);
      } else {
        //user is logged out
        setUser(null);
      }
    });
  }, []);

  return (
    <AppContext.Provider value={{ user, loading, recipes }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
