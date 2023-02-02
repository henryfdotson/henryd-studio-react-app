// Import Boostrap Grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import resumePDF from '../assets/henryfdotson_resume_2022.pdf';

function Resume(){
  return(
    <Container className='resume-container'>
      <h1>Resume</h1>
      <p>A few things I've done.</p>
      <Row>
        <Col sm={2}>
        </Col>
        <Col>
          <iframe className='resume-frame' src={resumePDF}></iframe>
        </Col>
        <Col sm={2}>
        </Col>
      </Row>
    </Container>
  )
};

export default Resume;