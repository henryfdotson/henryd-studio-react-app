// Import Boostrap Grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bioPic from '../assets/bioimage2.jpg';

function About(){
  return (
    <Container>
      <Row>
        <Col md>
           <img src={bioPic} height={20} className='img-thumbnail' alt="An image of Henry F. Dotson" />
        </Col>
        <Col md>
          <p className="about-text">Henry F. Dotson is a Philadelphia-based artist and System Administrator working at Girard College. At Girard, he is responsible for maintaining the school's network systems and ensuring that all students and staff have access to reliable technology. In addition to this, Henry has completed a four-year project called "Art Every Day" and is currently developing a video game titled "Ghosted". In the future, he hopes to combine his love of art and computer systems in whatever form that may take.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;