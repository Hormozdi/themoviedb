import React, { useEffect } from "react";

import Carousel from "../../components/Carousel";
import Layout from "../../components/Layout";
import useStore from "../../store/useStore";

import "./style.scss";

const Home = () => {
  const genres = useStore((state) => state.genres);
  const getGenres = useStore((state) => state.getGenres);
  const carousels = useStore((state) => state.carousels);
  const getGenreMovies = useStore((state) => state.getGenreMovies);

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
      <>
        {carousels?.map((carousel) => {
          console.log(carousel);
          return (
            <Carousel
              slides={[
                ...carousel.movies.map((movie) => ({
                  id: movie.id,
                  poster: `https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`,
                  title: movie.title,
                })),
              ]}
            />
          );
        })}
      </>
    </Layout>
  );
};

export default Home;
