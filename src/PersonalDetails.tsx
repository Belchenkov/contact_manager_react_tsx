import * as React from 'react';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';

import { IPersonState } from "./State";

interface IProps {
    DefaultState: IPersonState
}

export default class PersonalDetails extends React.Component<IProps, IPersonState> {
    private defaultState: Readonly<IPersonState>;

    constructor(props: IProps) {
        super(props);
        this.defaultState = props.DefaultState;
        this.state = props.DefaultState;
    }

    private updateBinding = (event: any) => {
        switch (event.target.id) {
            case `firstName`:
                this.setState({ FirstName: event.target.value });
                break;
            case `lastName`:
                this.setState({ LastName: event.target.value });
                break;
            case `addr1`:
                this.setState({ Address1: event.target.value });
                break;
            case `addr2`:
                this.setState({ Address2: event.target.value });
                break;
            case `town`:
                this.setState({ Town: event.target.value });
                break;
            case `county`:
                this.setState({ County: event.target.value });
                break;
            case `postcode`:
                this.setState({ Postcode: event.target.value });
                break;
            case `phoneNumber`:
                this.setState({ PhoneNumber: event.target.value });
                break;
            case `dateOfBirth`:
                this.setState({ DateOfBirth: event.target.value });
                break;
        }
    }

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
                                value={this.state.FirstName}
                                onChange={this.updateBinding}
                            />
                        </Col>
                        <Col>
                            <input
                                type="text"
                                id="lastName"
                                className="form-control"
                                placeholder="Last name"
                                value={this.state.LastName}
                                onChange={this.updateBinding}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor="addr1">Address line 1</label></Col>
                    </Row>
                    <Row>
                        <Col>
                            <input
                                type="text"
                                id="addr1"
                                className="form-control"
                                placeholder="Address line 1"
                                value={this.state.Address1}
                                onChange={this.updateBinding}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor="addr2">Address line 2</label></Col>
                    </Row>
                    <Row>
                        <Col>
                            <input
                                type="text"
                                id="addr2"
                                className="form-control"
                                placeholder="Address line 2"
                                value={this.state.Address2!}
                                onChange={this.updateBinding}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor="town">Town</label></Col>
                    </Row>
                    <Row>
                        <Col>
                            <input
                                type="text"
                                id="town"
                                className="form-control"
                                placeholder="Town"
                                value={this.state.Town}
                                onChange={this.updateBinding}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor="county">County</label></Col>
                    </Row>
                    <Row>
                        <Col>
                            <input
                                type="text"
                                id="county"
                                className="form-control"
                                placeholder="County"
                                value={this.state.County}
                                onChange={this.updateBinding}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col lg="3"><label htmlFor="postcode">Postal/ZipCode</label></Col>
                                <Col lg="4"><label htmlFor="phoneNumber">Phone number</label></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col lg="3">
                                    <input
                                        type="text"
                                        id="postcode"
                                        className="form-control"
                                        value={this.state.Postcode}
                                        onChange={this.updateBinding}
                                    />
                                </Col>
                                <Col lg="4">
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        className="form-control"
                                        value={this.state.PhoneNumber}
                                        onChange={this.updateBinding}
                                    /></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col><label htmlFor="dateOfBirth">Date of birth</label></Col>
                    </Row>
                    <Row>
                        <Col>
                            <input
                                type="date"
                                id="dateOfBirth"
                                value={this.state.DateOfBirth!}
                                onChange={this.updateBinding}
                            />
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