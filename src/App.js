import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom";
import {Link} from "react-router-dom";

import {SearchPage} from "./pages/searchPage/SearchPage";
import { Home } from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>

    </div>
  );
}

export default App;
