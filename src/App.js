import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import SingleRecipeDetails from './pages/SingleRecipeDetails';
import Error from './pages/Error';
import Register from './pages/Register';
import Login from './pages/Login';
import EditRecipe from './pages/EditRecipe';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateRecipe from './pages/CreateRecipe';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/recipe/create">
          <CreateRecipe />
        </Route>
        <Route exact path="/recipe/details/:id">
          <SingleRecipeDetails />
        </Route>
        <Route exact path="/recipe/edit/:id">
          <EditRecipe />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
