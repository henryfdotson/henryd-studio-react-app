import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/));

function RandomImage() {

  let randomItem = images[Math.floor(Math.random()*images.length)];
  let randomItemTitle = randomItem.match(/media\/(.*?)\./)[1];

  return (
    <Container className="randomImageContainer">
      <Row>
        <Col>
        </Col>
        <Col>
        <div className="randomImage">
          <img src={randomItem} alt={randomItem} />
          <p className="randomItemTitle">{randomItemTitle}</p>
        </div>
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  );
}

export default RandomImage;