import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Reviews from './pages/Reviews/Reviews';
import Header from './components/Header/Header';
// import Home from './components/pages/Home/Home';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./'));

const App = () => (
  <div className="app">
    <Header />

    <div className="mainWrapper">
      <main>
        <Routes>
          <Route
            path="/"
            element={<Suspense fallback={<Loader />}>{<Home />}</Suspense>}
            exact
          />
          <Route
            path="/movies"
            element={
              <Suspense fallback={<Loader />}>
                <Movies />
              </Suspense>
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <Suspense fallback={<Loader />}>
                <MovieDetails />
              </Suspense>
            }
          />
          <Route
            path="/movies/:movieId/cast"
            element={
              <Suspense fallback={<Loader />}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="/movies/:movieId/reviews"
            element={
              <Suspense fallback={<Loader />}>
                <Reviews />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </div>
  </div>
);

export default App;