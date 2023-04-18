import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "../src/Nav/Nav.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Henry Countries</h1>
        <Nav />
        <Switch>
          {/*<Route exact path="/countries" />
          <Route exact path="/countries/:id" />*/}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
