import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import GltfModel from './GltfModel';

const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

class Art3DList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      art3DListItems: [
        {
          embedCode: '_eh-BO9_IHQ',
          description: 'Philadelphia, PA to Atlantic City, NJ'
        },
        {
          embedCode: '-qpk2FAriLA',
          description: 'Cape May, New Jersey'
        },
        {
          embedCode: '-XuNdhgF-IE',
          description: 'Manhattan, New York City, NY'
        },
        {
          embedCode: 'X4mmli5SEZ4',
          description: 'Washington, DC'
        },
        {
          embedCode: 'KQc-c2ZXSEc',
          description: 'Madrid, España'
        },
        {
          embedCode: 'ZBJvEuhSWAE',
          description: 'Barcelona, España'
        },
        {
          embedCode: 'P254MlCNbIE',
          description: 'Vermont, USA'
        },
        {
          embedCode: 'hVRnKvMArSM',
          description: 'Nashville, Tennessee'
        },
        {
          embedCode: '23j2ACefyaQ',
          description: 'Zen and the Art of Gameboy Maintenance'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.art3DListItems.map((art3DItem, index) => {
          return (
            <div>
            <ModelViewer scale="40" modelPath={"../assets/models/milk.glb"} />
            <p>Hellooooo world</p>
            </div>


              // <div className="videoCard" key={index}>
              //     <iframe
              //       width="427"
              //       height="240"
              //       src={`https://www.youtube.com/embed/${vid.embedCode}`}
              //       frameBorder="0"
              //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              //       allowFullScreen
              //       title="Embedded youtube"
              //     />
              //     <p>{vid.description}</p>
              // </div>
          );
        })}
      </div>
    );
  }
}

export default Art3DList;