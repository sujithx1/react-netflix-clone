import "./Banner.css";
import axios from "../../axios";
import { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constant/constant";
import Movie from "./BannerType";

const Banner = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then(
        (res) => (
          console.log(res.data.results[0]), setMovie(res.data.results[0])
        )
      );
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""}`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-buttons">
          <button className="button">play</button>
          <button className="button">my list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_button"></div>
    </div>
  );
};

export default Banner;
