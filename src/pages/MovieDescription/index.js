import React from "react";
import { FaHandHoldingHeart, FaHeartBroken } from "react-icons/fa";

import Button from "../../components/Kit/Button";
import Image from "../../components/Kit/Image";
import mainStore from "../../store/mainStore";

import "./style.scss";

const MovieDescription = ({ id, imagSource, overview, title }) => {
  const { wishlistIds, addToWishlist, removeFromWishlist } = mainStore(
    (state) => state
  );

  return (
    <div className="single-movie-description">
      <Image src={imagSource} />
      <div className="data-section">
        <h1>{title}</h1>
        {wishlistIds.includes(id) ? (
          <Button classes="btn-danger" onClick={() => removeFromWishlist(id)}>
            <FaHeartBroken /> Remove from Wishlist
          </Button>
        ) : (
          <Button onClick={() => addToWishlist(id)}>
            <FaHandHoldingHeart /> Add to Wishlist
          </Button>
        )}

        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieDescription;
