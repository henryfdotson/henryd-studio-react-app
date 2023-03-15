import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function Contact(){
  return(
    <Container>
      <h1>Contact</h1>
      <p>Feel free to reach out.</p>
      <Row>
        <Col>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item action href="mailto:henryfdotson@gmail.com">Email</ListGroup.Item>
            <ListGroup.Item action href="https://www.linkedin.com/in/henryfdotson/" target="_blank">LinkedIn</ListGroup.Item>
            <ListGroup.Item action href="https://instagram.com/henryfdotson" target="_blank">Instagram</ListGroup.Item>
            <ListGroup.Item action href="https://youtube.com/@henryfdotson" target="_blank">YouTube</ListGroup.Item>
            <ListGroup.Item action href="https://twitter.com/henryfdotson" target="_blank">Twitter</ListGroup.Item>
            <ListGroup.Item action href="https://github.com/henryfdotson/" target="_blank">Github</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  )
};

export default Contact;