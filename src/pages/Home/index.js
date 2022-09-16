import React, { useEffect } from "react";

import Carousel from "../../components/Carousel";
import Layout from "../../components/Layout";
import useStore from "../../store/useStore";

import "./style.scss";

const Home = () => {
  const { genres, getGenres, carousels, getGenreMovies } = useStore(
    (state) => state
  );

  useEffect(() => {
    if (!genres.length) {
      getGenres();
    }
  }, [getGenres, genres]);

  useEffect(() => {
    if (!carousels.length && genres.length) {
      for (let i = 0; i < 3; i++) {
        const genre = genres[i];
        if (genre?.id) {
          getGenreMovies(genre.id);
        }
      }
    }
  }, [getGenreMovies, carousels, genres]);

  return (
    <Layout>
      {carousels?.map((carousel) => (
        <Carousel
          key={carousel.id}
          title={carousel.name}
          slides={[
            ...carousel.movies.map((movie) => ({
              id: movie.id,
              poster: `https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`,
              title: movie.title,
            })),
          ]}
        />
      ))}
    </Layout>
  );
};

export default Home;
