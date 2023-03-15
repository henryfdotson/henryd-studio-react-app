import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Art3DModel from './Art3DModel';

class Art3DList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelList: [
        {
          art3DURL: "/images/models/binary.glb",
          description: "Binary"
        },
        {
          art3DURL: "/images/models/cashflow.glb",
          description: "Cashflow"
        },
        {
          art3DURL: "/images/models/dippybird.glb",
          description: "Dippy Bird"
        },
        {
          art3DURL: "/images/models/newdolphin.glb",
          description: "Dolphin Rings"
        },
        {
          art3DURL: "/images/models/eruption.glb",
          description: "Eruption"
        },
        {
          art3DURL: "/images/models/goldbar.glb",
          description: "Gold Bar"
        },
        {
          art3DURL: "/images/models/kandinsky.glb",
          description: "Kandinsky"
        },
        {
          art3DURL: "/images/models/mousetrap.glb",
          description: "Mouse Trap"
        },
        {
          art3DURL: "/images/models/pain.glb",
          description: "Pain"
        },
        {
          art3DURL: "/images/models/sadface.glb",
          description: "Sad Face"
        },
        {
          art3DURL: "/images/models/theartistsstudio.glb",
          description: "The Artist's Studio"
        },
        {
          art3DURL: "/images/models/wearewatching.glb",
          description: "We Are Watching"
        },
        {
          art3DURL: "/images/models/whenlifegivesyoulemons.glb",
          description: "When Life Gives You Lemons"
        },
        {
          art3DURL: "/images/models/milk.glb",
          description: "Best Friends"
        },
        {
          art3DURL: "/images/models/ladybug.glb",
          description: "Ladybug"
        },
        {
          art3DURL: "/images/models/lobster.glb",
          description: "Chef"
        }      
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.modelList.map((artPiece3D, index) => {
          return (
              <div className="art3DCard" key={index}>
                  <Art3DModel modelURL={artPiece3D.art3DURL}
                  />
                  <p>{artPiece3D.description}</p>
              </div>
          );
        })}
      </div>
    );
  }
}

export default Art3DList;