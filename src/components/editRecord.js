import React, { Component } from 'react';
import axios from 'axios';
import './styling/editRecord.css';

class EditRecord extends Component {
    // create a constructor
    constructor() {
        // use super to invoke parent class
        super();

        // bind all events to this instance of class
        this.submitRecord = this.submitRecord.bind(this);
        this.changePatientID = this.changePatientID.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeDob = this.changeDob.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeContact = this.changeContact.bind(this);
        this.changeGender = this.changeGender.bind(this);
        this.changeOccupation = this.changeOccupation.bind(this);
        this.changeEContact = this.changeEContact.bind(this);
        this.changeBloodGrp = this.changeBloodGrp.bind(this);
        this.changeMedCons = this.changeMedCons.bind(this);
        this.changeCurrentMeds = this.changeCurrentMeds.bind(this);
        this.changeScan = this.changeScan.bind(this);

        // when constructor called set to blank
        this.state = {
            PatientID: "",
            Name: "",
            Age: "",
            Dob: "",
            Address: "",
            Contact: "",
            Gender: "",
            Occupation: "",
            EContact: "",
            BloodGrp: "",
            MedCons: "",
            CurrentMeds: "",
            Scan: ""
        }
    }

    componentDidMount() {
        // when the component gets mounted set the state here
        axios.get('http://localhost:4000/api/records/' + this.props.match.params.id)
            // create a promise
            .then((response) => {
                // set state
                this.setState({
                    PatientID: response.data.PatientID,
                    Name: response.data.Name,
                    Age: response.data.Age,
                    Dob: response.data.Dob,
                    Address: response.data.Address,
                    Contact: response.data.Contact,
                    Gender: response.data.Gender,
                    Occupation: response.data.Occupation,
                    EContact: response.data.EContact,
                    BloodGrp: response.data.BloodGrp,
                    MedCons: response.data.MedCons,
                    CurrentMeds: response.data.CurrentMeds,
                    Scan: response.data.Scan,
                    _id: response.data._id
                })
            })
            .catch((error) => {
                // catch and log error
                console.log(error);
            });
    }

    submitRecord(e) {
        // alert user the Patient record was edited
        alert("Patient Record Edited!");
        // change the window location to the records page
        window.location = 'http://localhost:4000/records';
        // log to console Patient edited
        console.log("Patient Record Edited!");

        // create a editRec object to send data to server
        const editRec = {
            PatientID: this.state.PatientID,
            Name: this.state.Name,
            Age: this.state.Age,
            Dob: this.state.Dob,
            Address: this.state.Address,
            Contact: this.state.Contact,
            Gender: this.state.Gender,
            Occupation: this.state.Occupation,
            EContact: this.state.EContact,
            BloodGrp: this.state.BloodGrp,
            MedCons: this.state.MedCons,
            CurrentMeds: this.state.CurrentMeds,
            Scan: this.state.Scan
        }

        // use axios to put editLab data to server
        axios.put('http://localhost:4000/api/records/' + this.state._id, editRec)
            // create a promise
            .then((response) => {
                // log response
                console.log(response)
            })
            .catch((error) => {
                // catch and log error
                console.log(error)
            });

        // prevent user from clicking submit multiple times
        e.preventDefault();

        // set the state
        this.setState({
            PatientID: "",
            Name: "",
            Age: "",
            Dob: "",
            Address: "",
            Contact: "",
            Gender: "",
            Occupation: "",
            EContact: "",
            BloodGrp: "",
            MedCons: "",
            CurrentMeds: "",
            Scan: ""
        });
    }

    changePatientID(e) {
        // when value changes update state of PatientId
        this.setState({
            PatientID: e.target.value
        });
    }

    changeName(e) {
        // when value changes update state of Name
        this.setState({
            Name: e.target.value
        });
    }

    changeAge(e) {
        // when value changes update state of Age
        this.setState({
            Age: e.target.value
        });
    }

    changeDob(e) {
        // when value changes update state of Dob
        this.setState({
            Dob: e.target.value
        });
    }

    changeAddress(e) {
        // when value changes update state of Address
        this.setState({
            Address: e.target.value
        });
    }

    changeContact(e) {
        // when value changes update state of Contact
        this.setState({
            Contact: e.target.value
        });
    }

    changeGender(e) {
        // when value changes update state of Gender
        this.setState({
            Gender: e.target.value
        });
    }

    changeOccupation(e) {
        // when value changes update state of Occupation
        this.setState({
            Occupation: e.target.value
        });
    }

    changeEContact(e) {
        // when value changes update state of EContact
        this.setState({
            EContact: e.target.value
        });
    }

    changeBloodGrp(e) {
        // when value changes update state of BloodGrp
        this.setState({
            BloodGrp: e.target.value
        });
    }

    changeMedCons(e) {
        // when value changes update state of MedCons
        this.setState({
            MedCons: e.target.value
        });
    }

    changeCurrentMeds(e) {
        // when value changes update state of CurrentMeds
        this.setState({
            CurrentMeds: e.target.value
        });
    }

    changeScan(e) {
        // when value changes update state of Scan
        this.setState({
            Scan: e.target.value
        });
    }

    render() {
        return (
            // create a main div with classname 'App'
            <div className="App">
                {/* Setup an onSubmit form */}
                <form onSubmit={this.submitRecord}>
                    {/* Form Title */}
                    <h4>⚕ Edit Patient Details Below ⚕</h4>

                    {/* Patient ID Div */}
                    <div className="form-group">
                        <label>Edit Patient ID: </label>
                        {/* Number Input Control */}
                        <input type="number"
                            className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            placeholder="Patient ID"
                            /* Set value and set onChange event to call changePatientID method */
                            value={this.state.PatientID}
                            onChange={this.changePatientID}>
                        </input>
                    </div>

                    {/* Full Name Div */}
                    <div className="form-group">
                        <label>Edit Full Name: </label>
                        {/* text Input Control */}
                        <input type="text"
                            className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            placeholder="Full Name"
                            /* Set value and set onChange event to call changeName method */
                            value={this.state.Name}
                            onChange={this.changeName}>
                        </input>
                    </div>

                    {/* Age Div */}
                    <div className="form-group">
                        <label>Edit Age: </label>
                        {/* Number Input Control */}
                        <input type="number"
                            className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            placeholder="Age"
                            /* Set value and set onChange event to call changeAge method */
                            value={this.state.Age}
                            onChange={this.changeAge}>
                        </input>
                    </div>

                    {/* DOB Div */}
                    <div className="form-group">
                        <label>Edit DOB: </label>
                        {/* date Input Control */}
                        <input type="date"
                            className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            /* Set value and set onChange event to call changeDob method */
                            value={this.state.Dob}
                            onChange={this.changeDob}>
                        </input>
                    </div>

                    {/* Address Div */}
                    <div className="form-group">
                        <label>Edit Address: </label>
                        {/* textarea text Control */}
                        <textarea type="text"
                            className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            placeholder="Address"
                            /* Set value and set onChange event to call changeAddress method */
                            value={this.state.Address}
                            onChange={this.changeAddress}>
                        </textarea>
                    </div>

                    {/* Contact Div */}
                    <div className="form-group">
                        <label>Edit Contact No: </label>
                        {/* tel Input Control */}
                        <input type="tel"
                            className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            placeholder="Contact No."
                            /* Set value and set onChange event to call changeContact method */
                            value={this.state.Contact}
                            onChange={this.changeContact}>
                        </input>
                    </div>

                    {/* Gender Div */}
                    <div className="form-group">
                        <label>Choose Gender: </label>
                        {/* select option Control */}
                        <select className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            /* Set value and set onChange event to call changeGender method */
                            value={this.state.Gender}
                            onChange={this.changeGender}>
                            {/* Setup all options */}
                            <option value="" disabled selected>Choose Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Occupation Div */}
                    <div className="form-group">
                        <label>Edit Occupation: </label>
                        {/* Text Input Control */}
                        <input type="text"
                            className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            placeholder="Occupation"
                            /* Set value and set onChange event to call changeOccupation method */
                            value={this.state.Occupation}
                            onChange={this.changeOccupation}>
                        </input>
                    </div>

                    {/* Emergency Contact Div */}
                    <div className="form-group">
                        <label>Edit Emergency Contact Name + Num: </label>
                        {/* Text Input Control */}
                        <input type="text"
                            className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            placeholder="Emergency Contact Name + Num"
                            /* Set value and set onChange event to call changeEContact method */
                            value={this.state.EContact}
                            onChange={this.changeEContact}>
                        </input>
                    </div>

                    {/* Blood Group Div */}
                    <div className="form-group">
                        <label>Choose Blood Group: </label>
                        {/* select option Control */}
                        <select className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            /* Set value and set onChange event to call changeBloodGrp method */
                            value={this.state.BloodGrp}
                            onChange={this.changeBloodGrp}>
                            {/* Setup all options */}
                            <option value="" disabled selected>Choose Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>

                    {/* Medical Cons Div */}
                    <div className="form-group">
                        <label>Edit Any Medical Conditions: </label>
                        {/* textarea text Control */}
                        <textarea type="text"
                            className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            placeholder="Medical Conditions"
                            /* Set value and set onChange event to call changeMedCons method */
                            value={this.state.MedCons}
                            onChange={this.changeMedCons}>
                        </textarea>
                    </div>

                    {/* Current Meds Div */}
                    <div className="form-group">
                        <label>Edit Any Current Medications: </label>
                        {/* textarea text Control */}
                        <textarea type="text"
                            className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            placeholder="Current Medications"
                            /* Set value and set onChange event to call changeCurrentMeds method */
                            value={this.state.CurrentMeds}
                            onChange={this.changeCurrentMeds}>
                        </textarea>
                    </div>

                    {/* Scan Link Div */}
                    <div className="form-group">
                        <label>Edit Scan Link: </label>
                        {/* textarea text Control */}
                        <textarea type="text"
                            className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            placeholder="Scan Links"
                            /* Set value and set onChange event to call changeScan method */
                            value={this.state.Scan}
                            onChange={this.changeScan}>
                        </textarea>
                    </div>

                    {/* button Div */}
                    <div className="form-group">
                        <br></br>
                        {/* button Control */}
                        <input type="submit"
                            value="Edit Patient"
                            className="submitButton">
                        </input>
                    </div>
                </form>
            </div>
        ); // end of return
    } // end of render method
} // end of class

// mark EditRecord for export
export default EditRecord;