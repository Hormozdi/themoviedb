import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Layout from "../../components/Layout";
import mainStore from "../../store/mainStore";
import MovieDescription from "../MovieDescription";

import "./style.scss";

const Movie = () => {
  const { id } = useParams();

  const { movie, getMovie, resetMovie, getWishlistFromLocalstorage } =
    mainStore((state) => state);

  useEffect(() => {
    getWishlistFromLocalstorage();
  }, []);

  useEffect(() => {
    if (id) {
      getMovie(id);
    }
    return () => resetMovie();
  }, [id, getMovie]);

  return (
    <Layout>
      <div className="container">
        {movie.title && (
          <div className="single-movie-container">
            <MovieDescription
              id={movie.id}
              overview={movie.overview}
              title={movie.title}
              imagSource={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            />
            <div className="single-movie-details">
              <h3>Details</h3>
              <div className="single-movie-details-table">
                {[
                  { name: "Original language", value: movie.original_language },
                  { name: "Adult", value: movie.adult.toString() },
                  { name: "Status", value: movie.status },
                  { name: "Release date", value: movie.release_date },
                  { name: "Tagline", value: movie.tagline },
                ].map((el, index) => (
                  <div key={el.name} className={index % 2 && "gray-bg"}>
                    <span>{el.name}</span>
                    <span>{el.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Movie;
