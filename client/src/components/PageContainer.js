import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import Search from "./pages/Search";


function PageContainer() {


    return (
      <Router>
        <div>
          <TopBar />
 
            <Route path={["/", "/quiz"]}>
                <Quiz />
            </Route>

            <Route path="/about">
                <About />
            </Route>

            <Route path="/search">
                <Search />
            </Route>
            <Footer />
        </div>        

      </Router>
    );

}

export default PageContainer;
