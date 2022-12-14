import React, { useEffect } from "react";

import Layout from "../../components/Layout";
import NoItem from "../../components/NoItem";
import mainStore from "../../store/mainStore";
import MovieDescription from "../MovieDescription";

import "./style.scss";

const Wishlist = () => {
  const {
    getWishlistFromLocalstorage,
    wishlistIds,
    wishlistMovies,
    addMovieToWishlist,
  } = mainStore((state) => state);

  useEffect(() => {
    getWishlistFromLocalstorage();
    addMovieToWishlist();
  }, [wishlistIds]);

  return (
    <Layout>
      <div className="container wishlist-container">
        {wishlistIds?.length ? (
          wishlistIds.map(
            (id) =>
              wishlistMovies[id] && (
                <MovieDescription
                  key={id}
                  id={wishlistMovies[id].id}
                  overview={wishlistMovies[id].overview}
                  title={wishlistMovies[id].title}
                  imagSource={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${wishlistMovies[id].poster_path}`}
                  linkMore
                />
              )
          )
        ) : (
          <NoItem />
        )}
      </div>
    </Layout>
  );
};

export default Wishlist;
