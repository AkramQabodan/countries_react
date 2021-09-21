import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/routes/main/Main";
import SearchResult from "./components/routes/searchResult/SearchResult";
function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <SearchResult />
    </div>
  );
}

export default App;
