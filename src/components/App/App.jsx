import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { MantineProvider, Text } from '@mantine/core';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import './App.css';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import CharacterList from '../CharacterList/CharacterList';
import { Character } from '../Character/Character';
import Build1 from '../Build1/Build1';
import Build3 from '../Build3/Build3';
import Build4 from '../Build4/Build4';
import Build5 from '../Build5/Build5';
import Build6 from '../Build6/Build6';
import CharacterReview from '../CharacterReview/CharacterReview';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/character-list">
          <CharacterList />
          </ProtectedRoute>

          <ProtectedRoute path="/character">
          <Character />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>
          
          {/* Note - all of these routes will need to be protected eventually!!! */}
    

         
          {/* User Character Build step 1 */}
          <Route exact path="/character-build-1">
          <Build1 />
          </Route>
          {/* User Character Build step 3 */}
          <Route exact path="/character-build-3">
          <Build3 />
          </Route>
          {/* User Character Build step 4 */}
          <Route exact path="/character-build-4">
          <Build4 />
          </Route>
          {/* User Character Build step 5 */}
          <Route exact path="/character-build-5">
          <Build5 />
          </Route>
          {/* User Character Build step 6 */}
          <Route exact path="/character-build-6">
          <Build6 />
          </Route>
          {/* User Character Build Review/Confirmation */}
          <Route exact path="/character-review">
          <CharacterReview />
          </Route>  

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    </MantineProvider>
  );
}

export default App;
