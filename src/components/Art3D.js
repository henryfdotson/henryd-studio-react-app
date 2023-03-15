import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
// import Art3DModel from "./Art3DModel";
import Art3DList from "./Art3DList";

function Art3D() {
  return (
    <div className="art3D">
      <h1>3D Art</h1>
      <p>Now featuring: click and drag! Please allow a moment for the 3D models to load in.</p>
      <div className="art3DCards">
        <Art3DList />
      </div>
    </div>
  );
}

export default Art3D;