import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import VideoList from "./VideoList";

function Video() {
  return (
    <div className="video">
      <h1>Video</h1>
      <p>A love of travel and minimalism.</p>
      <div className="videoCards">
        <VideoList />
      </div>
    </div>
  );
}

export default Video;