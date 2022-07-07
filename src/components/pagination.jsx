import React from "react";

class Pagination extends React.Component {
  state = {
    isEditable: false,
  };

  render() {
    // const { currentPage, totalPage, next, prev, isPrevious, isNext,handlePageChange,goToPage } =this.props;
    return (
      <div className="d-flex my-5 align-items-center">
        <button
          className="btn btn-warning"
          disabled={!this.props.isPrevious}
          onClick={() => {
            this.props.prev();
          }}
        >
          Previous
        </button>
        <div className="flex-grow-1 text-center">
          {this.state.isEditable ? (
            <input
              type="number"
              value={this.props.currentPage}
              onChange={(e) => {
                this.props.handlePageChange(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  this.props.goToPage();
                  this.setState({ isEditable: false });
                }
              }}
            />
          ) : (
            <p
              style={{ userSelect: "none", lineHeight: "1.1" }}
              title="Duble Tab to jump page"
              onDoubleClick={() => {
                this.setState({ isEditable: !this.state.isEditable });
              }}
            >
              {this.props.currentPage} of {this.props.totalPage}
              <br />
              <small>Double Tap to Edit</small>
            </p>
          )}
        </div>
        <button
          className="btn btn-warning ml-auto"
          disabled={!this.props.isNext}
          onClick={() => {
            this.props.next();
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
