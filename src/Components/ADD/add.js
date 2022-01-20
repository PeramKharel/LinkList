import { useState } from "react";
import styles from "./add.module.css";

function Add(props) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  // const [tag, setTag] = useState("");

  const submit = (e) => {
    e.preventDefault();
    props.addLink(name, url);
    setName("");
    setUrl("");
  };
  return (
    <div className={styles.adding}>
      <form>
        <label>URL NAME: </label>
        <br />
        <input
          type="text"
          value={name}
          placeholder="Facebook"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>URL LINK: </label>
        <br />
        <input
          type="text"
          value={url}
          placeholder="https://www.facebook.com"
          onChange={(e) => setUrl(e.target.value)}
        />
        <br />
        <button type="submit" onClick={submit}>
          Add Link
        </button>
      </form>
    </div>
  );
}

export default Add;
