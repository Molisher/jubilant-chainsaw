import { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { GlobalStyle } from "./globalStyles";
import { AboutUs, ContactUs, OurWorkPage, MovieDetailsPage } from "./pages";
import { Nav } from "./components";

function App() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
      });
    }, 500);
  }, [location]);

  return (
    <>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch key={location.pathname} location={location}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWorkPage />
          </Route>
          <Route path="/work/:id">
            <MovieDetailsPage />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
