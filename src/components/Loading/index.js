import React from "react";

import LoadingImage from "../../assets/loading.svg";
import Image from "../Kit/Image";

import "./style.scss";

const Loading = () => {
  return (
    <div className="loading-container">
      <Image src={LoadingImage} />
    </div>
  );
};

export default Loading;
