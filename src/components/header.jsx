import React from "react";
import { newsCategory } from "../news";

class Header extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleKeyPress = (e) => {};

  render() {
    const { category, changeCategory } = this.props;
    // const { searchTerm } = this.state;

    return (
      <div className="my-4">
        <h1 className="mb-4" style={{ fontWeight: "300" }}>
          Block Buster Headline
        </h1>

        <input
          type="search"
          className="form-control"
          placeholder="Type any thing for search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <div className="my-4">
          {newsCategory &&
            Object.keys(newsCategory).map((item) => {
              // use ternary oprator for less code
              // category === newsCatagory[item] ? (
              //   <button className="btn btn-sm btn-warning mr-2 mb-2">{`#${newsCatagory[item]}`}</button>
              // ) : (
              //   <button className="btn btn-sm btn-light mr-2 mb-2">{`#${newsCatagory[item]}`}</button>
              // );
              if (category === newsCategory[item]) {
                return (
                  <button
                    onClick={() => changeCategory(newsCategory[item])}
                    className="btn btn-sm btn-warning ms-2 mb-2"
                  >{`#${newsCategory[item]}`}</button>
                );
              }
              return (
                <button
                  onClick={() => changeCategory(newsCategory[item])}
                  className="btn btn-sm btn-light ms-2 mb-2"
                >{`#${newsCategory[item]}`}</button>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Header;
