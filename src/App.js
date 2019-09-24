import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CustomPagination from "./components/common/customPagination";
import { paginate } from "./components/common/utils/paginate";

class App extends Component {
  state = {
    items: [
      "banana",
      "strawberry",
      "pineapple",
      "peach",
      "apple",
      "cantoulope",
      "raspberry",
      "orange"
    ],
    pageSize: 3,
    currentPage: 1
  };

  totalPages = () => {
    const size = this.state.items.length;
    return size ? Math.ceil(size / this.state.pageSize) : 0;
  };

  renderItems = items => {
    return items.map(item => <p key={item}>{item}</p>);
  };

  handlePageChange = page => {
    this.setState({ currentPage: page.selected + 1 });
  };

  render() {
    const chunk = paginate(
      this.state.items,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <React.Fragment>
        {this.renderItems(chunk)}
        <CustomPagination
          pageCount={this.totalPages()}
          marginPagesDisplayed={0}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default App;
