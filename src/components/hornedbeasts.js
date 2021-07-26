

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
class HornedBeasts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numOfBeasts : 0
        }
    }
    incrementNumOfBeasts = () => {
        this.setState({
            numOfBeasts: this.state.numOfBeasts + 1
        })
    }
    render() {
        return (
            <>
  {
    <Col>
      <Card style={{ width: "18rem", height: "30rem" }}>
        <Card.Img onClick={this.incrementNumOfBeasts} variant="top" src={this.props.imgUrl} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
          Votes❣️✔️ {this.state.numOfBeasts}
          </Card.Text>
          <Card.Footer>
          {this.props.description}
    </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
}
            </>
        )
    }
}
export default HornedBeasts;
