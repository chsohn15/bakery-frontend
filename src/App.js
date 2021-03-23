import './App.css';
import Home from './components/Home.js'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
