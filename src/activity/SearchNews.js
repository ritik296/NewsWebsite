import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

const API_KEY = "916d5a0df7dd4da08b6af5cfb02e8ea2";

export default function SearchNews() {
  const [query, setQuery] = useState("all");
  const [article, setArticles] = useState([]);

  useEffect(() => {
    searchNews();
  }, []);

  function searchNews() {
    let searchBtn = document.getElementById("search_button");
    let searchTxt = document.getElementById("searchTxt");
    searchBtn.addEventListener("click", async function () {
      setQuery(searchTxt.value);
      let NEWS_BASE_URL = `https://newsapi.org/v2/everything?q=${!searchTxt.value?'all':searchTxt.value}&apiKey=${API_KEY}&pageSize=30&language=en`;
      let data = await fetch(NEWS_BASE_URL);
      console.log(searchTxt.value + " data fetch");
      let parsedData = await data.json();
      console.log(parsedData);
      setArticles(parsedData.articles);
    });
    // console.log(query);
  }

  // searchNews();

  return (
    <>
      {/* <h1 className="my-3 mx-3">{END_POINT[endPointMain].toUpperCase()} from {country.toUpperCase()} {category===''?'':`about ${category}`}</h1> */}
      <div className="row g-3 m-2 justify-content-center cara_view">
        {article.map((element) => {
          return (
            <div className="col card-view" key={element.url}>
              <NewsCard
                imageUrl={element.urlToImage}
                title={element.title}
                description={element.description}
                newsUrl={element.url}
                source={element.source.name}
                publishAt={element.publishedAt}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
