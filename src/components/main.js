import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from "react-bootstrap";
import HornedBeasts from './hornedbeasts';
import Data from './assets/data.json';




class Main extends React.Component {
    render() {
        return (

          

            <>
                <Container>
                    <Row>
                        {Data.map((item, index) => {
                            return (
                                <Col lg={4}>
                                    <HornedBeasts title={item.title} imgUrl={item.image_url} description={item.description} />
                                </Col>
                            )
                        }

                        )}
                    </Row>
                </Container>
            </>

        )
    }
}
export default Main;