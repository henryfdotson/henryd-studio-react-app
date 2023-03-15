import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ArtList from "./ArtList";

function Art() {
  return (
    <div className="art">
      <h1>Art</h1>
      <p>Selections from one piece of art every day. 2019-2022.</p>
      <div className="artCards">
        <ArtList />
      </div>
    </div>
  );
}

export default Art;