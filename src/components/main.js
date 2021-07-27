import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from "react-bootstrap";
import HornedBeasts from './hornedbeasts';
import Data from './assets/data.json';




class Main extends React.Component {
    render() {
        return (

            <main>
                <HornedBeasts
                    title="UniCorn"
                    description="A unicorn and a narwhal nuzzling their horns"
                    img="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
                />
                <HornedBeasts
                    title="Rhino Family"
                    description="Mother (or father) rhino with two babies"
                    img="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
                />
            </main>

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