import "./App.css";
import { Routes, useLocation, Route } from "react-router-dom";
import Nav from "../src/Nav/Nav.jsx";
import HomeButton from "./HomeButton/HomeButton";
import Cards from "./Cards/Cards";
import CountryDetail from "./CountryDetail/CountryDetail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "./Redux/actions";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Henry Countries</h1>
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route exact path="/" element={<HomeButton />} />
        <Route exact path="/home" element={<Cards countries={countries} />} />
        <Route exact path="/countries/:id" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
