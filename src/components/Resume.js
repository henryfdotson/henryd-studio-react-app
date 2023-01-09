// Import Boostrap Grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import resumePDF from '../assets/henryfdotson_resume_2022.pdf';

function Resume(){
  return(
    <Container className='resume-container'>
      <Row>
        <Col>
        <iframe className='resume-frame' src={resumePDF}></iframe>
        </Col>
      </Row>
    </Container>
  )
};

export default Resume;