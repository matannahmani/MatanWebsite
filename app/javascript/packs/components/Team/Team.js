import React, { Component } from 'react';
import {
    Container,
    Row
} from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import TeamBox from "./TeamBox";

class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams : [
                { image : "../assets/team/img-1.jpg", title : "Frank Johnson", desc : "CEO" },
                { image : "../assets/team/img-2.jpg", title : "Elaine Stclair", desc : "DESIGNER" },
                { image : "../assets/team/img-3.jpg", title : "Wanda Arthur", desc : "DEVELOPER" },
                { image : "../assets/team/img-4.jpg", title : "Joshua Stemple", desc : "MANAGER" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
        <section  className="section pt-4" id="team">
            <Container>

                {/* section title */}
                <SectionTitle title="BEHIND THE PEOPLE" desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />

                <Row className="margin-t-50">
                    {/* team box */}
                    <TeamBox teams={this.state.teams} />
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default Clients;
