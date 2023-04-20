import "./App.css";
import { BrowserRouter, Routes, useLocation, Route } from "react-router-dom";
import Nav from "../src/Nav/Nav.jsx";
import HomeButton from "./HomeButton/HomeButton";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <h1>Henry Countries</h1>
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route exact path="/" element={<HomeButton />}></Route>
        {/*<Route exact path="/countries" />
          <Route exact path="/countries/:id" />*/}
      </Routes>
    </div>
  );
}

export default App;
