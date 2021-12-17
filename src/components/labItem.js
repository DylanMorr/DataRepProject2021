import React from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './styling/labResults.css';
import { Link } from 'react-router-dom';

class LabItem extends React.Component {
    // constructor to bind method
    constructor() {
        // super to invoke parent class
        super();

        // bind to this instance
        this.DeleteLab = this.DeleteLab.bind(this);
    }

    // create delete lab method 
    DeleteLab(e) {
        // alert use to lab being deleted 
        alert("Lab Deleted!");
        // log that lab deleted to console
        console.log("Lab Deleted!");

        // stop user performing multiple deletes
        e.preventDefault();

        // log delete and id of lab to console
        console.log("Delete: " + this.props.lab._id);

        // create a delete promise
        axios.delete("http://localhost:4000/api/labs/" + this.props.lab._id)
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
                {/* display data in a table */}
                <table>
                    <tr>
                        {/* use this.props to get data from parent class */}
                        <td className="idCol">{this.props.lab.PatientID}</td>
                        <td className="nameCol">{this.props.lab.Name}</td>
                        <td className="scanCol">{this.props.lab.Scan}</td>
                        <td className="timeCol">{this.props.lab.Time}</td>
                        <td className="statusCol">{this.props.lab.Status}</td>
                        <td className="resultCol">{this.props.lab.Result}</td>
                        <td className="imgCol"><a href={this.props.lab.ImgLink}>Click for Image</a></td>
                        {/* Add an edit and delete lab button to a table column */}
                        <td className="buttonCol">
                            <Link to={"/edit-lab/" + this.props.lab._id} className="btn btn-primary">Edit Lab Details</Link>
                            <Button variant="danger" onClick={this.DeleteLab}>Delete Lab Details</Button>
                        </td>
                    </tr>
                </table>
            </div>
        ); // end of return
    } // end of render method
} // end of class

// mark LabItem for export
export default LabItem;