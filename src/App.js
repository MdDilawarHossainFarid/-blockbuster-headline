import React from "react";
// import axios from "axios";

import News, { newsCategory } from "../src/news";

import Header from "./components/header";
import NewsList from "../src/components/newsList";
import Pagination from "./components/pagination";
import SubHeader from "./components/sub-header";
import Loading from "./components/loading";

class App extends React.Component {
  state = {
    news: [],
    category: newsCategory.technology,
  };

  changeCategory = (category) => {
    this.setState({ category });
  };

  componentDidMount() {
    // const url = `${process.env.REACT_APP_NEWS_URL}?apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=2`;
    // axios
    //   .get(url)
    //   .then((response) => {
    //     this.setState({ news: response.data.articles });
    //   })
    //   .catch((e) => {
    //     console.log(e.name);
    //   });

    const news = new News(newsCategory.technology);
    news.getNews();
  }

  // componentDidUpdate(prevProps, prevState) {

  //   if (prevProps.category !== this.state.category) {
  //     const url = `${process.env.REACT_APP_NEWS_URL}?apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=10`;
  //     axios
  //       .get(url)
  //       .then((response) => {
  //         this.setState({ news: response.data.articles });
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header
              category={this.state.category}
              changeCategory={this.changeCategory}
            />
            <SubHeader />
            <NewsList news={this.state.news} />
            <Pagination />
            <Loading />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
