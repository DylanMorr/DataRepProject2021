import React from "react";
import axios from 'axios';
import './styling/newLab.css';

class NewLab extends React.Component {
    // setup a constructor
    constructor() {
        // super to invoke parent class
        super();

        // bind all events to this instance of class
        this.submitLab = this.submitLab.bind(this);
        this.changePatientID = this.changePatientID.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeScan = this.changeScan.bind(this);
        this.changeTime = this.changeTime.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.changeResult = this.changeResult.bind(this);
        this.changeImgLink = this.changeImgLink.bind(this);

        // when constructor is called set to blank
        this.state = {
            PatientID: "",
            Name: "",
            Scan: "",
            Time: "",
            Status: "",
            Result: "",
            ImgLink: "",
        }
    }

    componentDidMount() {
        // using this method to get the patientId and name as new labs are created under patient page
        axios.get('http://localhost:4000/api/records/' + this.props.match.params.id)
            // create a promise
            .then((response) => {
                // set the state
                this.setState({
                    PatientID: response.data.PatientID,
                    Name: response.data.Name,
                    _id: response.data._id
                })
            })
            .catch((error) => {
                // catch and log error
                console.log(error);
            });
    }

    submitLab(e) {
        // alert user to new lab being added
        alert("Lab Added!");
        // change location back to records page
        window.location = 'http://localhost:4000/records';
        // log to console lab added
        console.log("Lab Added!");

        // create a newLab object to send data to server
        const newLab = {
            PatientID: this.state.PatientID,
            Name: this.state.Name,
            Scan: this.state.Scan,
            Time: this.state.Time,
            Status: this.state.Status,
            Result: this.state.Result,
            ImgLink: this.state.ImgLink
        }

        axios.put('http://localhost:4000/api/labs/' + this.state._id, newLab)
            // create a promise
            .then((response) => {
                // log response to show everything added
                console.log(response)
            })
            .catch((error) => {
                // catch and log error
                console.log(error)
            });

        // use axios to post data using newLab object
        axios.post('http://localhost:4000/api/labs', newLab)
            // needs a promise for async
            .then((res) => {
                // log to console record entries 
                console.log(res);
            })
            .catch((err) => {
                // catch and log error
                console.log(err);
            });

        // stop user from submitting multiple times
        e.preventDefault();

        // set the state
        this.setState({
            PatientID: "",
            Name: "",
            Scan: "",
            Time: "",
            Status: "",
            Result: "",
            ImgLink: "",
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

    changeScan(e) {
        // when value changes update state of Scan
        this.setState({
            Scan: e.target.value
        });
    }

    changeTime(e) {
        // when value changes update state of Time
        this.setState({
            Time: e.target.value
        });
    }

    changeStatus(e) {
        // when value changes update state of Status
        this.setState({
            Status: e.target.value
        });
    }

    changeResult(e) {
        // when value changes update state of Result
        this.setState({
            Result: e.target.value
        });
    }

    changeImgLink(e) {
        // when value changes update state of ImgLink
        this.setState({
            ImgLink: e.target.value
        });
    }

    render() {
        return (
            // create a main div with classname 'App'
            <div className="App">
                {/* Setup an onSubmit form */}
                <form onSubmit={this.submitLab}>
                    {/* Form title */}
                    <h4>⚕ Enter Lab Details Below ⚕</h4>

                    {/* Patient ID Div */}
                    <div className="form-group">
                        <label>Enter Patient ID: </label>
                        {/* Number Input Control */}
                        <input type="number"
                            className="form-control"
                            /* Patient ID disabled from being edited as it reads from server */
                            disabled
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
                        <label>Enter Full Name: </label>
                        {/* Text Input Control */}
                        <input type="text"
                            className="form-control"
                            /* Patient name disabled from being edited as it reads from server */
                            disabled
                            /* make required so user has to fill in out */
                            required="true"
                            placeholder="Full Name"
                            /* Set value and set onChange event to call changeName method */
                            value={this.state.Name}
                            onChange={this.changeName}>
                        </input>
                    </div>

                    {/* Scan or Lab Div */}
                    <div className="form-group">
                        <label>Choose Scan or Lab Type: </label>
                        {/* select control */}
                        <select className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            /* Set value and set onChange event to call changeScan method */
                            value={this.state.Scan}
                            onChange={this.changeScan}>
                            {/* Setup all options */}
                            <option value="" disabled selected>Choose Scan or Lab Type</option>
                            <option value="MRI Scan">MRI Scan</option>
                            <option value="Ultrasound">Ultrasound</option>
                            <option value="CT Scan">CT Scan</option>
                            <option value="X-ray">X-ray</option>
                            <option value="DXA Scan">DXA Scan</option>
                            <option value="Pet Scan">Pet Scan</option>
                            <option value="Cardiac Calcium Scoring">Cardiac Calcium Scoring</option>
                            <option value="Complete Blood Count">Complete Blood Count</option>
                            <option value="Prothrombin Time">Prothrombin Time</option>
                            <option value="Basic Metabolic Panel">Basic Metabolic Panel</option>
                            <option value="Comprehensive Metabolic Panel">Comprehensive Metabolic Panel</option>
                            <option value="Lipid Panel">Lipid Panel</option>
                            <option value="Liver Panel">Liver Panel</option>
                            <option value="Urinalysis">Urinalysis</option>
                            <option value="Cultures">Cultures</option>
                            <option value="Thyroid Stimulating Hormone">Thyroid Stimulating Hormone</option>
                            <option value="Hemoglobin A1C">Hemoglobin A1C</option>
                        </select>
                    </div>

                    {/* Time Div */}
                    <div className="form-group">
                        <label>Enter Time: </label>
                        {/* input time control */}
                        <input type="time"
                            className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            placeholder="Time"
                            /* Set value and set onChange event to call changeTime method */
                            value={this.state.Time}
                            onChange={this.changeTime}>
                        </input>
                    </div>

                    {/* Status Div */}
                    <div className="form-group">
                        <label>Enter Status: </label>
                        {/* select control */}
                        <select className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            /* Set value and set onChange event to call changeStatus method */
                            value={this.state.Status}
                            onChange={this.changeStatus}>
                            {/* Setup all options */}
                            <option value="" disabled selected>Choose Status</option>
                            <option value="Sent">Sent</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </div>

                    {/* Result Div */}
                    <div className="form-group">
                        <label>Enter Result: </label>
                        {/* select control */}
                        <select className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            /* Set value and set onChange event to call changeResult method */
                            value={this.state.Result}
                            onChange={this.changeResult}>
                            {/* Setup all options */}
                            <option value="" disabled selected>Choose Result</option>
                            <option value="Negative">Negative</option>
                            <option value="Positive">Positive</option>
                            <option value="Inconclusive">Inconclusive</option>
                            <option value="Not Completed">Not Completed</option>
                        </select>
                    </div>

                    {/* Image Div */}
                    <div className="form-group">
                        <label>Enter Image Link: </label>
                        {/* textarea control */}
                        <textarea type="text"
                            className="form-control"
                            /* make required so user has to fill in out */
                            required="true"
                            placeholder="Image Links"
                            /* Set value and set onChange event to call changeImgLink method */
                            value={this.state.ImgLink}
                            onChange={this.changeImgLink}>
                        </textarea>
                    </div>

                    {/* button Div */}
                    <div className="form-group">
                        <br></br>
                        {/* submit control */}
                        <input type="submit"
                            value="Add Lab / Scan"
                            className="submitButton">
                        </input>
                    </div>
                </form>
            </div>
        ); // end of return
    } // end of render method
} // end of class

// mark NewLab for export
export default NewLab