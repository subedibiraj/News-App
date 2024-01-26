import React from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";

const News = (props) => {


  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)

  // document.title = `${formatCategory(props.category)} - News App`

  useEffect(() => {
    updateNews();
  }, [])
  
  const updateNews = async() => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(100);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  // const toggleNext = async () => {
  //   setPage(page + 1)
  //   updateNews();
  // };

  // const togglePrev = async () => {
  //   setPage(page - 1)
  //   updateNews();
  // };

  const formatCategory = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1); //Captitalizing the first letter of the category
  }

  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }

    return (
      <>
        <h2 className="text-center" style= {{marginTop: '90px'}}>
          <strong>
            News App - {formatCategory(props.category)} News
          </strong>
        </h2>
        {loading && <Loader />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Loader />}
        >
          <div className="container">
        <div className="row my-4">
          {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 44) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    publishedAt={element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-info"
            onClick={this.togglePrev}
            name="prev"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page >= Math.ceil(this.state.totalResults / 20)
            }
            className="btn btn-info"
            onClick={this.toggleNext}
            name="next"
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
}

News.defaultProps = {
  country: "us",
  pageSize: "9",
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News