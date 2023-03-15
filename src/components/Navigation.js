import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function Navigation() {
  return(
    <Container className='nav-Container'>
      <Row>
        <Col md>
          <Link to="/">Home</Link>
        </Col>
        <Col md>
          <Link to="/about">About</Link>
        </Col>
        <Col md>
          <Link to="/ghost-game">Games</Link>
        </Col>
        <Col md>
          <Link to="/art">Art</Link>
        </Col>
        <Col md>
          <Link to="/3d-art">3D Art</Link>
        </Col>
        <Col md>
          <Link to="/video">Video</Link>
        </Col>
        <Col md>
          <Link to="/design">Design</Link>
        </Col>
        <Col md>
          <Link to="/resume">Resume</Link>
        </Col>
        <Col md>
          <Link to="/contact">Contact</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Navigation;