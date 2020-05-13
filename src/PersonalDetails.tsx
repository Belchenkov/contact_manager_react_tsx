import * as React from 'react';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';

import { IPersonState } from "./State";
import { PersonRecord } from './Types';
import FormValidation from "./FormValidation";
import { Database } from "./Database/Database";
import { PersonalDetailsTableBuilder } from "./PersonalDetailsTableBuilder";
import { IRecordState, RecordState } from "./RecordState";

interface IProps {
    DefaultState: IPersonState
}

export default class PersonalDetails extends React.Component<IProps, IPersonState> {
    private defaultState: Readonly<IPersonState>;
    private canSave : boolean = false;
    private readonly dataLayer: Database<PersonRecord>;
    private people: IPersonState[];

    constructor(props: IProps) {
        super(props);
        this.defaultState = props.DefaultState;
        this.state = props.DefaultState;
        const tableBuilder : PersonalDetailsTableBuilder = new PersonalDetailsTableBuilder();
        this.dataLayer = new Database(tableBuilder.Build());
    }

    private userCanSave = (hasErrors : boolean) => {
        this.canSave = hasErrors;
    }

    private delete = (event : any) => {
        const person : string = event.target.value;
        this.DeletePerson(person);
    }

    private async DeletePerson(person : string) {
        const foundPerson = this.people.find((element : IPersonState) => {
            return element.PersonId === person;
        });

        if (!foundPerson) {
            return;
        }

        const personState : IRecordState = new RecordState();
        personState.IsActive = false;

        const state : PersonRecord = {
            ...foundPerson,
            ...personState
        };

        await this.dataLayer.Update(state);
        this.loadPeople();
        this.clear();
    }

    private loadPeople = () => {
        this.people = new Array<PersonRecord>();
        this.dataLayer.Read().then(people => {
            this.people = people;
            this.setState(this.state);
        });
    }

    private clear = () => {
        this.setState(this.defaultState);
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
        let people = null;

        if (this.people) {
            const copyThis = this;
            people = this.people.map(function it(p) {
                return (
                    <Row key={p.PersonId}>
                        <Col lg="6">
                            <label>{p.FirstName} {p.LastName}</label>
                        </Col>
                        <Col lg="3">
                            <Button value={p.PersonId} color="link" onClick={copyThis.setActive}>Edit</Button>
                        </Col>
                        <Col lg="3">
                            <Button value={p.PersonId} color="link" onClick={copyThis.delete}>Delete</Button>
                        </Col>
                    </Row>
                )
            }, this);
        }

        return (
            <Row>
                <Col lg="8">
                    <Row>
                        <Col className="d-flex align-items-center">
                            <img src="https://img.icons8.com/plasticine/80/000000/business-contact--v1.png"/>
                            <h4 className="main-title">Personal details</h4>
                        </Col>
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
                    <Row>
                        <FormValidation
                            CurrentState={this.state}
                            CanSave={this.userCanSave}
                        />
                    </Row>
                    <Col>
                        <Col>
                            <Row>
                                <Col>{people}</Col>
                            </Row>
                            <Row className="mt-3">
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
