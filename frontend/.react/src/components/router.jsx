import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import BookPage from "./BookPage.jsx";

const Routes = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route component = { Home }  path="/" exact />
                <Route component = { BookPage }  path="/book" />
            </Routes>
       </BrowserRouter>
   )
}

export default Routes;