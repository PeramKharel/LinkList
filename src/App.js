import logo from "./horsie.png";
import "./App.css";
import Add from "./Components/ADD/add";
import List from "./Components/SAVED/list";
import Search from "./Components/SEARCH/search";
import { useState } from "react";

function App() {
  const [links, setLink] = useState([
    { name: "Facebook", url: "https://www.facebook.com" },
    { name: "Google", url: "https://www.google.com" },
  ]);
  const addLink = (name, url) => {
    const newLink = links.concat([
      {
        name,
        url,
      },
    ]);
    setLink(newLink);
  };
  console.log(links);

  const [search, setSearch] = useState("");
  const searching = (search) => {
    setSearch(search);
  };
  const filteredLinks = (search) => {
    const lowerSearch = search.toLowerCase();
    return links.filter((link) => {
      return (
        link.name.toLowerCase().indexOf(lowerSearch) > -1 ||
        link.url.toLowerCase().indexOf(lowerSearch) > -1
      );
    });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 justify-content-center align-items-center">
          <h2>Search Links</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <Add addLink={addLink} />
          <br />
        </div>
        <div className="viewing col-8 justify-content-center align-items-center">
          <Search search={searching} />
          <br />
          <List links={filteredLinks(search)} />
        </div>
      </div>
    </div>
  );
}

export default App;
