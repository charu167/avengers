import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TvShow.scss";
import { useLocation } from "react-router-dom";

const TvShow = () => {
  const location = useLocation();
  const id = location.pathname.slice(18);

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`https://api.tvmaze.com/shows/${id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  console.log(data);

  return (
    <div className="tv-show">
      {data === null ? (
        <span className="loading">Loading...</span>
      ) : (
        <>
          <div className="img">
            <img
              src={data.image === null ? "" : data.image.original}
              alt="image not provided"
            />
          </div>
          <div className="details">
            <div className="name">
              <span>{data.name}</span>
            </div>
            <div className="premeired">
              <span>Premeired on</span>
              <span>{data.premiered}</span>
            </div>
            <div className="rating">
              <span>rating</span>
              <span>{data.rating.average}</span>
            </div>
            <div className="runtime">
              <span>Runtime</span>
              <span>{data.runtime}</span>
            </div>
            <div className="type">
              <span>type</span>
              <span>{data.type}</span>
            </div>
            <div className="language">
              <span>Language</span>
              <span>{data.language}</span>
            </div>
            <div className="genres">
              <span>Genres</span>
              <div>
                {data.genres.map((e, i) => {
                  return <span key={i}>{e}</span>;
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TvShow;
