import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function Navigation() {
  return(
    <Container className='nav-Container'>
      <Row>
        <Col>
          <Link to="/">Home</Link>
        </Col>
        <Col>
          <Link to="/about">About</Link>
        </Col>
        <Col>
          <Link to="/ghost-game">Games</Link>
        </Col>
        <Col>
          <Link to="/art">Art</Link>
        </Col>
        <Col>
          <Link to="/3d-art">3D Art</Link>
        </Col>
        <Col>
          <Link to="/video">Video</Link>
        </Col>
        <Col>
          <Link to="/resume">Resume</Link>
        </Col>
        <Col>
          <Link to="/contact">Contact</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Navigation;