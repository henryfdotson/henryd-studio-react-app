// Import Boostrap Grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import resumePDF from '../assets/henryfdotson_resume_2022.pdf';

function Resume(){
  return(
    <Container className='resume-container'>
      <h1>Resume</h1>
      <p>Some things I've done, and a list of past art exhibitions.</p>
      <Row>
        <Col sm={2}>
        </Col>
        <Col>
          <iframe className='resume-frame' src={resumePDF}></iframe>
        </Col>
        <Col sm={2}>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Part Art Exhibitions</h2>
          <ul className='artShows'>
            <li>Feb 11, 2023 The Heart Gallery, URBN Center - Drexel University, 3501 Market St, Philadelphia, PA</li>
            <li>Oct 29, 2023 Halloween Art Popup, Lancaster Walk, 34th St, Philadelphia, PA</li>
            <li>Sep 24, 2022 Art All Night 2022, Sincerely Breakfast, 1506 19th St NW, Washington, DC 20036</li>
            <li>Sep 4, 2021 Flamin’ Hot, Bad Candy, 3508 12th St NE, Washington, DC 20017</li>
            <li>July 10, 2021 Sugar Rush, Bad Candy, 3508 12th St NE, Washington, DC 20017</li>
            <li>June 19, 2021 Bad Candy Grand Opening, Bad Candy, 3508 12th St NE, Washington, DC 20017</li>
            <li>May 8, 2021 Wilson’s Garage Show, 3054 Mt Pleasant St NW, Washington, DC 20009</li>
            <li>Apr 1, 2021 Habitual Art Magazine: Spring 2021, Digital release</li>
            <li>Mar 21, 2021 The BIZARRE BAZAAR, 6950 Maple St NW, Washington, DC 20012</li>
            <li>Mar 14, 2021 - Artfest Magazine: Issue 1, Digital release</li>
            <li>Mar 14-28, 2021 Acts of Resistance Through Absurd Resilience, 6950 Maple St NW, Washington, DC 20012</li>
            <li>Dec 2020 henryd Guerilla Installation “The Kiss“, Outside of 2423 18th St NW, Washington, DC</li>
            <li>Dec 2020 henryd and Others Group Show at Dos Gringos, Dos Gringos, Washington DC</li>
            <li>Oct 16, 2020 - henryd x Bay Atlantic University Display, Bay Atlantic University Works, Washington, DC</li>
            <li>Oct 3, 2020 henryd Sidewalk Pop-Up Show, Mt. Pleasant Triangle, Washington, DC</li>
            <li>Sep 5, 2020 henryd Private Art Salon, henryd Studio, Washington, DC</li>
            <li>Jul 18, 2020 Patterson Mansion Live Painting Demo Sponsored by Liquor.com, Patterson Mansion Ampeer Residences, Washington, DC</li>
            <li>Jun 27, 2020 Parking Lot Popup, 14th and S Street NW, Washington, DC</li>
            <li>Jun 2020 ArtRaveDC Virtual Art Gallery, Online Exhibition, Washington, DC</li>
            <li>Apr 2020 Pandemic Response Food Drive Art Drive x Chris Cardi x Sage Warner, Maketto, Washington, DC</li>
            <li>Mar 14, 2020 piLITICAL pARTy, 6950 Maple St NW, Washington, DC Cancelled due to COVID-19</li>
            <li>Mar 1, 2020 ArtRaveDC x Dupont Underground, Dupont Underground, Washington, DC</li>
            <li>Feb 23, 2020 ArtRaveDC x Dupont Underground, Dupont Underground, Washington, DC</li>
            <li>Feb 16, 2020 ArtRaveDC x Dupont Underground, Dupont Underground, Washington, DC</li>
            <li>Feb 9, 2020 ArtRaveDC x Dupont Underground, Dupont Underground, Washington, DC</li>
            <li>Jan 31, 2020 Henry F Dotson ARTSHOW Season 1 Launch, SPACYcLOUd, Washington, DC</li>
            <li>Nov 2019 Henry F Dotson Teaser Pop-up Exhibition, SPACYcLOUd, Washington, DC</li>
            <li>Oct 2019 DADA QUEER DADA!, Rhizome, Washington, DC</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
};

export default Resume;