import React from "react";
import notFound from "../../assets/image/notFound.png";
import "./404.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <img src={notFound} alt="" className="notFound_img" />
    </div>
  );
};

export default NotFound;
