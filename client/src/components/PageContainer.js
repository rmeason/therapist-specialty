import React, { Component } from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./pages/Quiz"
import About from "./pages/About"
import Search from "./pages/Search"


class PageContainer extends Component {
    state = {
      currentPage: ""
    };
  

handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Quiz") {
      return <Quiz />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Search") {
      return <Search />;
    } else {
        return <Quiz />
    }
  };

  render() {
    return (
      <wrapper>
        <div>
          <Header />
          <TopBar
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          {this.renderPage()}
        </div>        
        <Footer />
      </wrapper>
    );
  }
}

export default PageContainer;
