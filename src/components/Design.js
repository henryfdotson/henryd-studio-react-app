// Import Boostrap Grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import josecoxLogo from '../assets/designimages/drinksbyjosecoxstyleguide1.png';
import badcandyLogo from '../assets/designimages/badcandydesignguide.png';
import henrydLogo from '../assets/designimages/goldbardesignguide.png';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

function Design(){
  return (
    <LazyLoadComponent>
      <Container>
        <h1>Design</h1>
        <p>A collection of design work produced by henryd.studio</p>
        <Row className='designRow'>
          <Col sm={5}>
            <img src={josecoxLogo} className='designImage' alt="An image of Henry F. Dotson" />
          </Col>
          <Col sm={7}>
            <h3>Drinks by Jose Cox</h3>
            <p className="about-text">Drinks by Jose Cox is a cocktail mixology brand that's all about delivering fresh, original, and exciting drinks to customers. The brand's logo is used across packaging, labeling, glassware, and merchandise to represent the unique vision of founder and mixologist, Jose Cox.<br /><br />Originally hailing from Mexico, Jose Cox brings a wealth of flavor knowledge and creativity to his craft. Whether he's whipping up classic cocktails with a modern twist or inventing entirely new drinks, Jose's drinks are always a hit with customers. So whether you're looking for a drink to spice up your next party or just want to treat yourself to something delicious, Drinks by Jose Cox has got you covered.</p>
          </Col>
        </Row>
        <Row className='designRow'>
          <Col sm={5}>
            <img src={badcandyLogo} className='designImage' alt="An image of Henry F. Dotson" />
          </Col>
          <Col sm={7}>
            <h3>Bad Candy Art Gallery</h3>
            <p className="about-text">Bad Candy was a Washington, D.C. art gallery that showcased cutting-edge contemporary art from both emerging and established artists. With a focus on the intersection of pop culture and fine art, Bad Candy presented a dynamic and diverse range of works across various mediums such as painting, sculpture, and digital art.<br /><br />The gallery's name and logo pays homage to the idea of the "sweet and sour" duality that exists in the art world, where beauty and darkness often coexist in the same piece. Like a piece of bad candy, the art at this gallery was sometimes unsettling, sometimes delightful, but always left a lasting impression.</p>
          </Col>
        </Row>
        <Row className='designRow'>
          <Col sm={5}>
            <img src={henrydLogo} className='designImage' alt="An image of Henry F. Dotson" />
          </Col>
          <Col sm={7}>
            <h3>henryd.studio</h3>
            <p className="about-text">The Gold Bar icon, often mistakenly referred to as "butter" is the primary logo used to represent the art practice of Henry F. Dotson (henryd). Originating from a street graffiti tag used by the artist, the icon is also rich with meaning. On one level, it offers a pointed critique of the absurd monetary value placed on works of art.<br /><br />After all, a simple drawing can be as good as gold. But on another level, the Gold Bar icon speaks to the transformative power of art itself. It's a symbol that reminds us of the magic that can happen when an artist takes something mundane and transforms it into something beautiful, unexpected, and valuable.
            </p>
          </Col>
        </Row>
      </Container>
    </LazyLoadComponent>
  );
}

export default Design;