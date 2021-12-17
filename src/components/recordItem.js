import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './styling/patientRecords.css';

class RecordItem extends Component {
    // constructor to bind method
    constructor() {
        super();

        // bind to this instance
        this.DeleteRecord = this.DeleteRecord.bind(this);
    }

    // create delete record method 
    DeleteRecord(e) {
        // alert user Patient record being deleted 
        alert("Patient Deleted!");
        // log that Patient record deleted to console
        console.log("Patient Deleted!");

        // stop multiple deletes
        e.preventDefault();

        // log delete and id of Patient record to console
        console.log("Delete: " + this.props.record._id);

        // create a delete promise
        axios.delete("http://localhost:4000/api/records/" + this.props.record._id)
            .then(() => {
                // refresh the page
                this.props.RefreshData();
            })
            .catch((error) => {
                // catch and log error
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {/* display data in an Accordion */}
                <Accordion>
                    <Accordion.Item eventKey="0">
                        {/* display patient id and name in header */}
                        <Accordion.Header className='accHeader'>ID: {this.props.record.PatientID} - {this.props.record.Name}</Accordion.Header>
                        <Accordion.Body className='accBody'>
                            {/* Create a table to display patient record */}
                            <table>
                                {/* Setup table header */}
                                <tr>
                                    <th>Age</th>
                                    <th>DOB</th>
                                    <th>Address</th>
                                    <th>Contact</th>
                                    <th>Gender</th>
                                    <th>Occupation</th>
                                    <th>E-Contact</th>
                                    <th>Blood Group</th>
                                    <th>Med Cons</th>
                                    <th>Current Meds</th>
                                    <th>Scan</th>
                                    <th className='controlCol'>Controls</th>
                                </tr>
                                {/* Setup table data display */}
                                <tr>
                                    <td>{this.props.record.Age}</td>
                                    <td>{this.props.record.Dob}</td>
                                    <td>{this.props.record.Address}</td>
                                    <td>{this.props.record.Contact}</td>
                                    <td>{this.props.record.Gender}</td>
                                    <td>{this.props.record.Occupation}</td>
                                    <td>{this.props.record.EContact}</td>
                                    <td>{this.props.record.BloodGrp}</td>
                                    <td>{this.props.record.MedCons}</td>
                                    <td>{this.props.record.CurrentMeds}</td>
                                    {/* Create a link to look at the scans */}
                                    <td><a href={this.props.record.Scan}>Click for Scan</a></td>
                                    {/* Add an edit button using link to pass id up*/}
                                    {/* Add an new lab button using link to pass id up*/}
                                    {/* Add an delete button and trap click event to delete method*/}
                                    <td>
                                        <Link to={"/edit-record/" + this.props.record._id} className="btn btn-primary">Edit Record</Link>
                                        <Link to={"/new-lab/" + this.props.record._id} className="btn btn-primary">Create Lab</Link>
                                        <Button variant="danger" onClick={this.DeleteRecord} className="btn btn-primary">Delete Record</Button>
                                    </td>
                                </tr>
                            </table>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        ); // end of return
    } // end of render method
} // end of class

// mark RecordItem for export
export default RecordItem;