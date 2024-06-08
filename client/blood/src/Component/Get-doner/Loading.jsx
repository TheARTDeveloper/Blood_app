import React from "react";
import "./get.css";

const Loading = () => {
  return (
    <div className="loader">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
