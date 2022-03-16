import React from "react";
import "./NewsCard.css";

let image =
  "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg";

export default function NewsCard(props) {
  function newsCardClicked(url) {
    // console.log("clicked");
    window.open(url, "_blank");
  }

  return (
    <div className="card h-100 news-card" onClick={() => newsCardClicked(props.newsUrl)}>
      <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning">
        {props.source}
        <span className="visually-hidden">unread messages</span>
      </span>
      <img src={props.imageUrl} className="card-img-top news-image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <p className="d-flex justify-content-end publish-time">
        {new Date(props.publishAt).toGMTString()}
      </p>
    </div>
  );
}

NewsCard.defaultProps = {
  imageUrl:
    "https://cdn.99images.com/photos/wallpapers/artist/artist%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-c5sw2.jpg",
};
