import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
const ghostGameUrl = 'ghostGame/index.html';

function GhostGame() {
  return (
    <div className="Game">
      <h1>Ghosted: The Game</h1>
      <iframe title='Ghost Game' src={ghostGameUrl} width='500px'  height='500px'></iframe>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Controls:</Accordion.Header>
        <Accordion.Body>
          <Container>
            <Row>
              <Col>A button: "Z key"</Col>
              <Col>B button: "X key"</Col>
              <Col>Start button: "Enter key"</Col>
              <Col>Select button: "Shift key"</Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item> 
      </Accordion>     
    </div>
  );
}

export default GhostGame;