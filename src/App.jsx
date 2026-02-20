import "./index.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Create from "./components/create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./notFound";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
