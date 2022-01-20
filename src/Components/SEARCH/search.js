import { useState } from "react";
import styles from "./search.module.css";
function Search(props) {
  const [search, setSearch] = useState("");

  const newSearching = (e) => {
    const newSearch = e.currentTarget.value;
    setSearch(newSearch);
    props.search(newSearch);
  };

  return (
    <div className={styles.add}>
      <h4 className="search">Search for saved links: <input type="text" value={search} onChange={newSearching} /></h4>
    </div>
  );
}

export default Search;
