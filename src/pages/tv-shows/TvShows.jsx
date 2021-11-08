import React, { useEffect, useState } from "react";
import "./TvShows.scss";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const TvShows = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://api.tvmaze.com/search/shows?q=avengers")
        .then((res) => {
          let sample = [];
          res.data.map((e, i) => {
            sample.push({
              name: e.show.name,
              language: e.show.language,
              country: e.show.network,
              genres: e.show.genres,
              runtime: e.show.runtime,
              premiered: e.show.premiered,
              rating: e.show.rating,
              thumbnail: e.show.image,
              id: e.show.id,
            });
          });
          setData(sample);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <div className="tv-shows">
      {data.map((e, i) => {
        return (
          <div className="item" key={i}>
            <div className="img">
              <img
                src={
                  e.thumbnail === null
                    ? "https://static.tvmaze.com/uploads/images/medium_portrait/30/75437.jpg"
                    : e.thumbnail.medium
                }
                alt="image not provided"
              />
            </div>

            <div className="details">
              <div className="name">
                <Link className="link" to={`/tv-shows/details/${e.id}`}>
                  <span>{e.name}</span>
                </Link>
              </div>

              <div className="language">
                <span>Language</span>
                <span>{e.language}</span>
              </div>
              <div className="country">
                <span>Country</span>
                <span>
                  {e.country === null ? "not provided" : e.country.country.name}
                </span>
              </div>
              <div className="runtime">
                <span>Runtime</span> <span> {e.runtime}</span>
              </div>
              <div className="premeire">
                <span>Premiered on</span> <span>{e.premiered}</span>
              </div>
              <div className="rating">
                <span>Rating</span>
                <span>
                  {e.rating.average === null
                    ? "not provided"
                    : e.rating.average}
                </span>
              </div>
              <div className="genres">
                <span>genres</span>
                <div>
                  {e.genres.map((el, it) => {
                    return <span key={it}>{el}</span>;
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TvShows;
