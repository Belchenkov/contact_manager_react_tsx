import * as React from 'react';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';

export default class PersonalDetails extends React.Component {
    public render() {
        return (
            <Row>
                <Col lg="8">
                    <Row>
                        <Col><h4 className="mb-3">Personal details</h4></Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor="firstName">First name</label></Col>
                        <Col><label htmlFor="lastName">Last name</label></Col>
                    </Row>
                    <Row>
                        <Col>
                            <input
                                type="text"
                                id="firstName"
                                className="form-control"
                                placeholder="First name"
                            />
                        </Col>
                        <Col>
                            <input
                                type="text"
                                id="lastName"
                                className="form-control"
                                placeholder="Last name"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="3"><label htmlFor="postcode">Postal/ZipCode</label></Col>
                        <Col lg="4"><label htmlFor="phoneNumber">Phone number</label></Col>
                    </Row>
                    <Row>
                        <Col lg="3">
                            <input type="text" id="postcode" className="form-control" />
                        </Col>
                        <Col lg="4">
                            <input type="text" id="phoneNumber" className="form-control" />
                        </Col>
                    </Row>
                    <Col>
                        <Col>
                            <Row>
                                <Col lg="6">
                                    <Button size="lg" color="success">Load</Button>
                                </Col>
                                <Col lg="6">
                                    <Button size="lg" color="info">New Person</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                </Col>
            </Row>
        );
    }
}
