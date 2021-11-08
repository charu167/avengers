import React from "react";
import { Link } from "react-router-dom";
import './PageOne.scss'

const PageOne = () => {
  return (
    <div className="pageone">
      <Link to="/tv-shows/avengers" className="link">
        <span>Go to avengers</span>
      </Link>
    </div>
  );
};

export default PageOne;
