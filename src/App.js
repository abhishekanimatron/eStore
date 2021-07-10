import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import Loading from "./components/Loading";

// lazy imports, imported when accessed
const Home = lazy(() => import("./pages/home/home"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const Products = lazy(() => import("./pages/products"));
const NotFound = lazy(() => import("./pages/notFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path={ROUTES.HOME} component={Home} exact />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.CONTACT} component={Contact} />
          <Route path={ROUTES.PRODUCTS} component={Products} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
