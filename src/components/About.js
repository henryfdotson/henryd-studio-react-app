// Import Boostrap Grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bioPic from '../assets/bioimage3.jpg';

function About(){
  return (
    <Container>
      <h1>About</h1>
      <p>Who is henryd?</p>
      <Row>
        <Col sm={4}>
           <img src={bioPic} height={20} className='img-thumbnail' alt="An image of Henry F. Dotson" />
        </Col>
        <Col sm={8}>
          <h3 className="about-text">About Henry F. Dotson</h3>
          <p className="about-text">Henry F. Dotson is a Philadelphia-based artist and System Administrator. He has completed a four-year project called "Art Every Day" and is recently developed a video game titled "Ghosted". In the future, he hopes to combine his love of art and computer systems in whatever form that may take.</p>
          <h3 className="about-text">About This Website</h3>
          <p className="about-text">This website is a single lightweight React.js app showcasing a collection of my various artistic works spanning various mediums. As an environmentally-conscious artist, I have taken the initiative to make this website sustainable by locally hosting it from my apartment in Philadelphia on a low-powered MacBook running Ubuntu OS version 22.04. By browsing through my work, you will not only discover my love of art, but also a dedication to promoting a greener and more responsible approach to digital presence. As a side note, please allow a brief moment to allow for images and 3D models to load as this MacBook works day and night to keep this website running.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;