import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import './NewsCollection.css'

const API_KEY = "5e8fc64fe18445be9d6fdd76593fed2f";
const END_POINT = ["top-headlines", "everything"];

export default function NewsCollection(props) {
  const [article, setArticles] = useState([]);
  const [endPointMain, setEndPoint] = useState(END_POINT[0]);
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("");
  // const [PAGE_NO, setPAGE_NO] = useState(0);

  useEffect(() => {
    componentDidMount();
  }, []);

  async function componentDidMount() {
    console.log("cdm");

    setEndPoint(props.endPoint);
    setCountry(props.COUNTRY);
    setCategory(props.CATEGORY);
    // setCategory(props.PageNo);

    let NEWS_BASE_URL = `https://newsapi.org/v2/${END_POINT[props.endPoint]}?q=${props.QUERY}&country=${props.COUNTRY}&category=${props.CATEGORY}&apiKey=${API_KEY}&pageSize=30&page=${props.PageNo}&sortBy=${props.SORT_BY}&language=en`;

    let data = await fetch(NEWS_BASE_URL);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
  }

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

NewsCollection.defaultProps = {
    endPoint : 0,
    QUERY : '',
    COUNTRY : 'in',
    CATEGORY : '',
    SORT_BY : '',
    PAGE_NO : 0
}
