import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from "react-bootstrap";
import HornedBeasts from './hornedBeasts';
import Form from 'react-bootstrap/Form';
import Data from './assets/data.json';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            NumberOfHorns: -1,
        }
    }
    ChangeInput = (event) => {
        event.preventDefault();
        this.setState({
            NumberOfHorns: parseInt(event.target.value)
        })
        console.log(typeof event.target.value)
    }
    render() {
        return (
            <>
                <Form>
                    <Form.Group>
                        <Form.Label>Select Number of Horns</Form.Label>
                        <Form.Control onChange={this.ChangeInput} as='select' name='NumberOfHorns'>
                            <option value={-1} >All</option>
                            <option value={1} >one 🦄</option>
                            <option value={2}>two 🦄🦄</option>
                            <option value={3}>three 🦄🦄🦄</option>
                            <option value={100}>Hundred 💯</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Container>
                    <Row>
                        {
                            this.props.data.filter((element) => {
                                if (this.state.NumberOfHorns === -1)
                                    return true;
                                else
                                    return this.state.NumberOfHorns === element.horns
                            }).map(item => {
                                return (
                                    <Col lg={4}>

                                        <HornedBeasts
                                            key={item.title.toString()}
                                            title={item.title}
                                            imageUrl={item.image_url}
                                            description={item.description}
                                            handler={this.props.handler}
                                        />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </>
        )
    }
}
export default Main;