import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaHandHoldingHeart } from "react-icons/fa";

import Button from "../../components/Kit/Button";
import Image from "../../components/Kit/Image";
import Layout from "../../components/Layout";
import mainStore from "../../store/mainStore";

import "./style.scss";

const Movie = () => {
  const { id } = useParams();

  const {
    movie,
    getMovie,
    resetMovie,
    wishlist,
    getWishlistFromLocalstorage,
    addToWishlist,
  } = mainStore((state) => state);

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
            <Image
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            />
            <div className="data-section">
              <Button
                onClick={() => addToWishlist(movie.id)}
                disabled={wishlist.includes(movie.id)}
              >
                <FaHandHoldingHeart /> Add to Wishlist
              </Button>
              <p>{movie.overview}</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Movie;
