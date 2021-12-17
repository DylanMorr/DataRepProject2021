import React, { Component } from 'react';
import axios from 'axios';
import LabResults from './labResults';
import './styling/labResults.css';

class ReadLabResults extends Component {
    // create a constructor
    constructor() {
        // super to invoke parent class
        super();

        // bind RefreshData to this instance
        this.RefreshData = this.RefreshData.bind(this);
    }

    // create an array for state data
    state = {
        results: []
    }

    // component life cycle hook gets called when component gets mounted / active in view
    componentDidMount() {
        // use axios to retrieve data from server 
        axios.get('http://localhost:4000/api/labs')
            // create a promise
            .then((res) => {
                // update array results with data
                this.setState({ results: res.data })
            })
            .catch((error) => {
                // catch and log error
                console.log(error);
            });
    }

    // create a method to reload data
    RefreshData() {
        // use axios to retrieve data from server 
        axios.get('http://localhost:4000/api/labs')
            .then((response) => {
                // update array results with data
                this.setState({ results: response.data })
            })
            // if theres a problem log an error to the console
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                {/* Page heading */}
                <h2 className='heading'>Scans & Lab Results</h2>
                {/* Create a table and setup header */}
                <table>
                    <tr>
                        <th className="idCol">Patient ID</th>
                        <th className="nameCol">Name</th>
                        <th className="scanCol">Scan</th>
                        <th className="timeCol">Time</th>
                        <th className="statusCol">Status</th>
                        <th className="resultCol">Result</th>
                        <th className="imgCol">Image Link</th>
                        <th className="buttonCol">Edit / Delete</th>
                    </tr>
                </table>
                {/* call the results function in the LabResults class and populate the labItem with the data */}
                {/* pass RefreshData to labresult child class */}
                <LabResults results={this.state.results} RefreshData={this.RefreshData}></LabResults>
            </div>
        ); // end of return
    } // end of render method
} // end of class

// mark ReadLabResults for export
export default ReadLabResults;