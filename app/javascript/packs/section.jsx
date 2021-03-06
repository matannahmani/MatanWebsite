import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class Section extends Component {

    render() {
        return (
            <React.Fragment>
        <section className="section bg-home home-half" id="home" data-image-src="assets/bg-home.jpg">
            <div className="bg-overlay"></div>
            <div className="display-table">
                <div className="display-table-cell">
                    <Container>
                        <Row>
                            <Col lg={{size:8, offset :2}}  className="col-lg-8 offset-lg-2 text-white text-center">
                                <h1 className="home-title">We help startups launch their products</h1>
                                <p className="padding-t-15 home-desc">Etiam sed.Interdum consequat proin vestibulum class at.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="wave-effect wave-anim">
                <div className="waves-shape shape-one">
                    <div className="wave wave-one" style={{backgroundImage : `url(../assets/wave-shape/wave1.png)`}}></div>
                </div>
                <div className="waves-shape shape-two">
                    <div className="wave wave-two" style={{backgroundImage : `url(../assets/wave-shape/wave2.png)`}}></div>
                </div>
                <div className="waves-shape shape-three">
                    <div className="wave wave-three" style={{backgroundImage : `url(../assets/wave-shape/wave3.png)`}}></div>
                </div>
            </div>

        </section>
            </React.Fragment>
        );
    }
}

export default Section;
