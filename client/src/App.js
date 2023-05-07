import "./App.css";
import { Routes, useLocation, Route, Link } from "react-router-dom";
import HomeButton from "./HomeButton/HomeButton";
import Cards from "./Cards/Cards";
import CountryDetail from "./CountryDetail/CountryDetail";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filter,
  getActivity,
  getCountry,
  getCountryByName,
  orderName,
  paginate,
} from "./Redux/actions";
import SearchBar from "./SearchBar/SearchBar";
import Nav from "./Nav/Nav";
import CreateActivityForm from "./CreateActivityForm/CreateActivityForm";
import Pagination from "./Pagination/Pagination";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const sortedCountries = useSelector((state) => state.sortedCountries);
  const filteredCountries = useSelector((state) => state.filteredCountries);
  const paginatedCountries = useSelector((state) => state.paginatedCountries);
  const [searchResult, setSearchResult] = useState([]);
  const [countryFilter, setCountryFilter] = useState("");
  const couPerPage = 10;

  useEffect(() => {
    dispatch(getCountry());
    dispatch(getActivity());
  }, [dispatch]);

  useEffect(() => {
    dispatch(paginate(1));
  }, [dispatch, countries, sortedCountries, filteredCountries]);

  useEffect(() => {
    dispatch(filter({ filterType: "Nombre", filterValue: countryFilter }));
    if (countryFilter.length >= 4) {
      dispatch(getCountryByName(countryFilter)).then((res) => {
        setSearchResult([res.payload]);
      });
    }
    dispatch(orderName("Ascendente"));
  }, [dispatch, countryFilter]);

  function handleSearch(name) {
    dispatch(getCountryByName(name)).then((res) => {
      setSearchResult([res.payload]);
    });
  }

  return (
    <div className="App">
      <h1>THE COUNTRIES APP</h1>
      {location.pathname !== "/" && (
        <div className="div-nav">
          <SearchBar
            setCountryFilter={setCountryFilter}
            onSearch={handleSearch}
          />
          <Nav />
          <Link className="A-app" to="/home/createactivityform">
            Crear Actividad
          </Link>
          <Pagination
            countries={filteredCountries.length}
            couPerPage={couPerPage}
          />
        </div>
      )}
      <Routes>
        <Route exact path="/" element={<HomeButton />} />
        <Route
          exact
          path="/home"
          element={<Cards countries={paginatedCountries} />}
        />
        <Route exact path="/countries/:id" element={<CountryDetail />} />
        <Route
          exact
          path="/home/createactivityform"
          element={<CreateActivityForm />}
        />
      </Routes>
    </div>
  );
}
export default App;
