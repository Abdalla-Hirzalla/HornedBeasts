import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'


class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfBeasts: 0
        }
    }
    incrementNumOfBeasts = () => {
        this.setState({
            numOfBeasts: this.state.numOfBeasts + 1
        })
    }
    passData = () => {
        this.props.handler(this.props.title, this.props.imageUrl, this.props.description, true);
    }
    render() {
        return (
            <>
                {
                    <Col>
                        <Card style={{ width: "18rem", height: "30rem" }}
                            onClick={this.incrementNumOfBeasts}>
                            <Card.Img onClick={this.passData} variant="top" src={this.props.imageUrl} />
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Text>
                                    Votes☑️: {this.state.numOfBeasts}
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