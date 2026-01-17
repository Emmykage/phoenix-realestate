import React from 'react';
import './loader.css';
import loaderGif from "../../assets/gif/loader.gif"
const Loader = () => (
  <div className="progress__container bg-red-60">
    {/* <div className="load-progress" /> */}
    <img src={loaderGif} alt="" />

  </div>
);

export default Loader;
