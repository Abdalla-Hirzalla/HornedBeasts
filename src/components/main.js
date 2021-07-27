import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from "react-bootstrap";
import HornedBeasts from './hornedBeasts';
import Data from './assets/data.json';


class Main extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        {
                            this.props.data.map(item => {
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