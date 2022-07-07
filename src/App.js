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

  next = () => {
    if (this.state.data.isNext) {
      this.setState({ isLoading: true });
    }
    news
      .next()
      .then((data) => {
        this.setState({ data: data, isLoading: false });
      })
      .catch((e) => {
        alert("Something Went Worng");
        this.setState({ isLoading: false });
      });
  };

  prev = () => {
    if (this.state.data.isPrevious) {
      this.setState({ isLoading: true });
    }
    news
      .prev()
      .then((data) => {
        this.setState({ data: data, isLoading: false });
      })
      .catch((e) => {
        alert("Something Went Worng");
        this.setState({ isLoading: false });
      });
  };

  handlePageChange = (value) => {
    this.setState({
      data: { ...this.state.data, currentPage: Number.parseInt(value) },
    });
  };

  goToPage = () => {
    this.setState({ isLoading: true });
    news
      .setCurrentPage(this.state.data.currentPage)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        alert("Something Went Worng");
        this.setState({ isLoading: false });
      });
  };

  changeCategory = (category) => {
    this.setState({ isLoading: true });
    news
      .changeCategory(category)
      .then((data) => {
        this.setState({ data: data, isLoading: false });
      })
      .catch((e) => {
        alert("Something Went Worng");
        this.setState({ isLoading: false });
      });
  };

  search = (searchTerm) => {
    this.setState({ isLoading: true });
    news
      .search(searchTerm)
      .then((data) => {
        this.setState({ data: data, isLoading: false });
      })
      .catch((e) => {
        alert("Something Went Worng");
        this.setState({ isLoading: false });
      });
  };

  render() {
    const {
      article,
      isPrevious,
      isNext,
      category,
      // totalResults,
      currentPage,
      totalPage,
    } = this.state.data;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header
              category={category}
              changeCategory={this.changeCategory}
              search={this.search}
            />
            <SubHeader
              totalResults={this.state.data.totalResults}
              currentPage={this.state.data.currentPage}
              totalPage={this.state.data.totalPage}
            />
            {this.state.isLoading ? (
              <Loading />
            ) : (
              <div>
                <NewsList news={article} />
                <Pagination
                  next={this.next}
                  prev={this.prev}
                  isPrevious={isPrevious}
                  isNext={isNext}
                  totalPage={totalPage}
                  currentPage={currentPage}
                  handlePageChange={this.handlePageChange}
                  goToPage={this.goToPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
