import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Movies.module.css'; // Переконайтеся, що шлях правильний
import DefaultPoster from 'components/DefaultPoster/DefaultPoster';
import SearchForm from 'components/SearchForm/SearchForm';

const MovieDetails = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              language: 'uk-UA',
              api_key: '47b0a612b169acf1eb58a4d87a2b2bdd',
            },
          }
        );

        setMovieDetails(response.data);
      } catch (error) {
        console.error('Помилка при отриманні деталей фільму:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  return (
    <div className={styles.movieDetailsContainer}>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      {/* Додайте інші деталі про фільм за потреби */}
    </div>
  );
};

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  // Зчитуємо результати пошуку з localStorage при завантаженні компонента
  useEffect(() => {
    const savedResults = JSON.parse(localStorage.getItem('searchResults'));
    if (savedResults) {
      setSearchResults(savedResults);
    }
  }, []);

  // Зберігаємо результати пошуку в localStorage при їх оновленні
  useEffect(() => {
    localStorage.setItem('searchResults', JSON.stringify(searchResults));
  }, [searchResults]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            language: 'uk-UA',
            api_key: '47b0a612b169acf1eb58a4d87a2b2bdd',
            query: searchTerm,
          },
        }
      );

      if (response.data.results.length === 0) {
        toast.warn('Фільми з таким ім\'ям не знайдено');
      }

      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Помилка при отриманні фільмів:', error);
    }
  };

  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleSubmit = async () => {
    await fetchMovies();
  };

  return (
    <div className={styles.moviesContainer}>
      <ToastContainer />
      <SearchForm onSubmit={handleSubmit} setSearchTerm={setSearchTerm} />
      
      <div className={styles.moviesList}>
        {searchResults.map((movie) => (
          <div
            key={movie.id}
            className={styles.movieCard}
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>

      {selectedMovieId && <MovieDetails movieId={selectedMovieId} />}
    </div>
  );
};


