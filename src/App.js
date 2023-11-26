import { Routes, Route, BrowserRouter } from "react-router-dom"

import './App.css';
import './scss/custom.scss';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
