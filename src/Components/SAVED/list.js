import styles from "./list.module.css";
function List(props) {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        {props.links && props.links.length > 0
          ? props.links.map((link, i) => (
              <div key={i}>
                <a
                  className="btn btn-primary m-3"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              </div>
            ))
          : "No links present"}
      </div>
    </div>
  );
}

export default List;
