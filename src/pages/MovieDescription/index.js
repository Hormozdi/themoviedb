import React from "react";
import { Link } from "react-router-dom";
import {
  FaHandHoldingHeart,
  FaHeartBroken,
  FaLongArrowAltRight,
} from "react-icons/fa";

import Button from "../../components/Kit/Button";
import Image from "../../components/Kit/Image";
import mainStore from "../../store/mainStore";

import "./style.scss";

const MovieDescription = ({
  id,
  imagSource,
  overview,
  title,
  linkMore = false,
}) => {
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
        {linkMore && (
          <Link to={`/movie/${id}`} className="more-link">
            Read more <FaLongArrowAltRight />
          </Link>
        )}
      </div>
    </div>
  );
};

export default MovieDescription;
