import './App.css';
import Home from './components/Home.js';
import CupcakesDisplay from './components/CupcakesDisplay.js';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <Route
              exact
              path="/desserts"
              render={(routerProps) => (
                <CupcakesDisplay {...routerProps} />
              )}
            />
      </Router>
    </div>
  );
}

export default App;

//https://learnwithparam.com/blog/dynamic-pages-in-react-router/
