import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [
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
        {this.state.videoList.map((vid, index) => {
          return (
              <div className="videoCard" key={index}>
                  <iframe
                    width="427"
                    height="240"
                    src={`https://www.youtube.com/embed/${vid.embedCode}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                  <p>{vid.description}</p>
              </div>
          );
        })}
      </div>
    );
  }
}

export default VideoList;