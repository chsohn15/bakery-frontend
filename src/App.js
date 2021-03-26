import './App.css';
import Home from './components/Home.js';
import BakerySite from './components/BakerySite/BakerySite.js';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      Welcome to Bakery Central!
      <Router>
        <Route
              exact
              path="/"
              render={(routerProps) => (
                <Home {...routerProps} />
              )}
            />
        <Route
              exact
              path="/:storeId/"
              render={(routerProps) => (
                <BakerySite {...routerProps} />
              )}
            />
      </Router>
    </div>
  );
}

export default App;

//https://learnwithparam.com/blog/dynamic-pages-in-react-router/
