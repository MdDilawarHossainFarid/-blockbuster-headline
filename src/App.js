import React from "react";
import News, { newsCategory } from "../src/news";

import Header from "./components/header";
import NewsList from "../src/components/newsList";
import Pagination from "./components/pagination";
import SubHeader from "./components/sub-header";
import Loading from "./components/loading";

const news = new News(newsCategory.technology);
class App extends React.Component {
  state = {
    data: {},
    isLoading: true,
  };

  componentDidMount() {
    news
      .getNews()
      .then((data) => {
        this.setState({ data: data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something Went Worng");
        this.setState({ isLoading: false });
      });
  }

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
            {this.state.isLoading ? (
              <Loading />
            ) : (
              <NewsList news={this.state.data.article} />
            )}

            <Pagination />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
