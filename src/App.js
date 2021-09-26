import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/routes/main/Main";
import SearchResult from "./components/routes/searchResult/SearchResult";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/main" component={Main} />
          <Route path="/search-result" component={SearchResult} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
