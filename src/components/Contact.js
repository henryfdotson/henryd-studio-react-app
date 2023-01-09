import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function Contact(){
  return(
    <Container>
      <Row>
        <Col>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item variant="secondary" action href="mailto:henryfdotson@gmail.com"> Personal Email (henryfdotson@gmail.com)</ListGroup.Item>
            <ListGroup.Item variant="dark" action href="mailto:hdotson@girardcolleg.edu">Work Email (hdotson@girardcollege.edu)</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
        </Col>
      </Row>
      <div><br /></div>
      <Row>
        <Col>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item variant="primary" action href="https://www.linkedin.com/in/henryfdotson/" target="_blank">LinkedIn (@henryfdotson)</ListGroup.Item>
            <ListGroup.Item variant="warning" action href="https://instagram.com/henryfdotson" target="_blank">Instagram (@henryfdotson)</ListGroup.Item>
            <ListGroup.Item variant="danger" action href="https://youtube.com/@henryfdotson" target="_blank">YouTube (@henryfdotson)</ListGroup.Item>
            <ListGroup.Item variant="info" action href="https://twitter.com/henryfdotson" target="_blank">Twitter (@henryfdotson)</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  )
};

export default Contact;