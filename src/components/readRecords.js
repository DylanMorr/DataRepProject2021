import React, { Component } from 'react';
import Records from './records';
import axios from 'axios';
import './styling/patientRecords.css';

class ReadRecords extends Component {
    // create a constructor
    constructor() {
        // super to invoke parent class
        super();

        // bind RefreshData to this instance
        this.RefreshData = this.RefreshData.bind(this);
    }

    // create an array for state data
    state = {
        records: []
    }

    // component life cycle hook gets called when component gets mounted / active in view
    componentDidMount() {
        // use axios to retrieve data from server 
        axios.get('http://localhost:4000/api/records')
            // create a promise
            .then((response) => {
                // update array records with data
                this.setState({ records: response.data })
            })
            .catch((error) => {
                // catch and log error
                console.log(error)
            });
    }

    // create a method to reload data
    RefreshData() {
        // use axios to retrieve data from server 
        axios.get('http://localhost:4000/api/records')
            .then((response) => {
                // update array records with data
                this.setState({ records: response.data })
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
                <h2 className='heading'>Patient Records</h2>
                {/* call the records function in the Records class and populate the recordItem with the data */}
                {/* pass RefreshData to records child class */}
                <Records records={this.state.records} RefreshData={this.RefreshData}></Records>
            </div>
        ); // end of return
    } // end of render method
} // end of class

// mark ReadRecords for export
export default ReadRecords;