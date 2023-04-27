import "./App.css";
import { Routes, useLocation, Route } from "react-router-dom";
import HomeButton from "./HomeButton/HomeButton";
import Cards from "./Cards/Cards";
import CountryDetail from "./CountryDetail/CountryDetail";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter, getCountry, getCountryByName } from "./Redux/actions";
import SearchBar from "./SearchBar/SearchBar";
import Nav from "./Nav/Nav";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const filteredCountries = useSelector((state) => state.filteredCountries);
  const [searchResult, setSearchResult] = useState([]);
  const [countryFilter, setCountryFilter] = useState("");

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filter({ filterType: "Nombre", filterValue: countryFilter }));
    if (countryFilter.length >= 4) {
      dispatch(getCountryByName(countryFilter)).then((res) => {
        setSearchResult([res.payload]);

        console.log("res", res);
        console.log("country filter", countryFilter);
      });
    }
  }, [dispatch, countryFilter]);

  function handleSearch(name) {
    dispatch(getCountryByName(name)).then((res) => {
      setSearchResult([res.payload]);
      console.log("res", res);
    });
  }

  console.log(filteredCountries);

  return (
    <div className="App">
      <h1>Henry Countries</h1>
      {location.pathname !== "/" && (
        <div>
          <SearchBar
            setCountryFilter={setCountryFilter}
            onSearch={handleSearch}
          />
          <Nav />
        </div>
      )}
      <Routes>
        <Route exact path="/" element={<HomeButton />} />
        <Route
          exact
          path="/home"
          element={<Cards countries={filteredCountries} />}
        />
        <Route exact path="/countries/:id" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}
export default App;
