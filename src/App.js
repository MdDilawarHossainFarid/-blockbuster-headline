import React from "react";
import { newsCategory } from "../src/news/index";

import Header from "./components/header";
import NewsList from "../src/components/newsList";
import Pagination from "./components/pagination";
import SubHeader from "./components/sub-header";

const fakeNews = [
  {
    title: "ola ipo start",
    content: "Ola IPO for $2345 per user",
    url: "https://linktonews.com",
    urlToImage: "https://linktoimage.com",
    publishedAt: "published date and time",
    source: {
      name: "CNN",
    },
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header category={newsCategory.business} />
            <SubHeader />
            <NewsList news={fakeNews} />
            <Pagination />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
