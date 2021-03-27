import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Home from './pages/Home';
// import About from './pages/About';
// import SingleRecipe from './pages/SingleRecipe';
// import Error from './pages/Error';
// import Register from './pages/Register';
// import Login from './pages/Login';

// import Navbar from './components/Navbar';
import Loading from './components/Loading';

function App() {
  return (
    <div>
      <Router>
        <Loading />
        {/* <Navbar /> */}
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/recipe/:id">
            <SingleRecipe />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Error />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
