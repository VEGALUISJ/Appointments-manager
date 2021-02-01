import React from "react";
import "../styles/Preload.scss";

function preLoad() {
  return (
    <div className="preload">
      <div className="loading">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default preLoad;
