import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import TopBar from "./TopBar";
import Footer from "./Footer";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import Search from "./pages/Search";
import Loading from "./pages/Loading";


function PageContainer() {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
      }


    return (
      <Router>
        <div>
            <TopBar />
 
            <Route exact path={["/", "/quiz"]}>
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
