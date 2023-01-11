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
          <Link to="/resume">Resume</Link>
        </Col>
        <Col>
          <Link to="/ai-chatbot">Ai Chatbot</Link>
        </Col>
        <Col>
          <Link to="/contact">Contact</Link>
        </Col>
      </Row>
    </Container>
  )
};

export default Navigation;